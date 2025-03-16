import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { getInfoData, getPriceData } from "../api";
import { InfoData, PriceData } from "../types/api";
import { useState } from "react";

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
  background-color: black;
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
  background-color: black;
  justify-content: space-between;
  padding: 5px 100px;
  border-radius: 10px;
  margin-top: 20px;
  border: 1px solid;
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
  const { isLoading: tickerLoading, data: tickersData } = useQuery<PriceData>({
    queryKey: ["tickers", coinId],
    queryFn: () => getPriceData(coinId),
  });
  const loading = infoLoading || tickerLoading;

  const onClickTabMenu = (tabName: string) => {
    setTabName(tabName);
    navigate(tabName);
  };

  return (
    <Container>
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
              <Text>OPEN SOURCE</Text>
              <Text>{infoData?.open_source ? "YES" : "NO"}</Text>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview style={{ padding: "5px 60px" }}>
            <OverviewItem>
              <Text>TOTAL SUPPLY</Text>
              <Text>{tickersData?.total_supply}</Text>
            </OverviewItem>
            <OverviewItem>
              <Text>MAX SUPPLY</Text>
              <Text>{tickersData?.max_supply}</Text>
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
          <Outlet />
        </>
      )}
    </Container>
  );
};

export default Coin;
