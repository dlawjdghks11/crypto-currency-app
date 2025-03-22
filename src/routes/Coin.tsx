import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getInfoData, getPriceData } from "../api";
import { InfoData, PriceData } from "../types/api";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.text};
`;

const Overview = styled.div`
  background-color: ${(props) => props.theme.subBackground};
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  border-radius: 15px;
`;

const OverviewItem = styled.div`
  color: ${(props) => props.theme.text};
`;

const Text = styled.div`
  color: ${(props) => props.theme.text};
  text-align: center;
  padding: 3px 2px;
`;

const Description = styled.p`
  color: ${(props) => props.theme.text};
  padding: 20px 0px;
`;

const Loader = styled.div`
  color: ${(props) => props.theme.text};
`;

const Tab = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.subBackground};
  justify-content: space-between;
  padding: 5px 100px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const TabItem = styled.div<{
  $isActive: boolean;
}>`
  color: ${(props) =>
    props.$isActive ? props.theme.primary : props.theme.text};
  cursor: pointer;
`;

const Coin = () => {
  const params = useParams();
  const navigate = useNavigate();
  const coinId = params.coinId ?? "";
  const [tabName, setTabName] = useState<string>();
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>({
    queryKey: ["info", coinId],
    queryFn: () => getInfoData(coinId),
  });
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>({
    queryKey: ["price", coinId],
    queryFn: () => getPriceData(coinId),
  });
  const loading = infoLoading || priceLoading;

  const onClickTabMenu = (tabName: string) => {
    setTabName(tabName);
    navigate(tabName);
  };

  return (
    <Container>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>{infoData?.name}</title>
          </Helmet>
        </div>
      </HelmetProvider>
      <Header>
        <Title>{infoData?.name}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <Text>Rank</Text>
              <Text>{infoData?.rank}</Text>
            </OverviewItem>
            <OverviewItem>
              <Text>SYMBOL</Text>
              <Text>$ {infoData?.symbol}</Text>
            </OverviewItem>
            <OverviewItem>
              <Text>PRICE:</Text>
              <Text>{priceData?.quotes.USD.price}</Text>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview style={{ padding: "5px 60px" }}>
            <OverviewItem>
              <Text>TOTAL SUPPLY</Text>
              <Text>{priceData?.total_supply}</Text>
            </OverviewItem>
            <OverviewItem>
              <Text>MAX SUPPLY</Text>
              <Text>{priceData?.max_supply}</Text>
            </OverviewItem>
          </Overview>
          <Tab>
            <TabItem
              onClick={() => {
                onClickTabMenu("chart");
              }}
              $isActive={tabName === "chart"}
            >
              Chart
            </TabItem>
            <TabItem
              onClick={() => {
                onClickTabMenu("price");
              }}
              $isActive={tabName === "price"}
            >
              Price
            </TabItem>
          </Tab>
          <Outlet context={{ coinId, priceData }} />
        </>
      )}
    </Container>
  );
};

export default Coin;
