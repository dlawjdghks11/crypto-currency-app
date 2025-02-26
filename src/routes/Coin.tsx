import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getCoinData } from "../api";

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
  margin-top: 30px;
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

const Coin = () => {
  const params = useParams()
  const coinId = params.coinId ?? "";

  return <Container>
    <Header>
      <Title>{coinId}</Title>
    </Header>
    <Overview>
      <OverviewItem>
        <Text>Rank</Text>
        <Text>1</Text>
      </OverviewItem>
      <OverviewItem>
        <Text>SYMBOL</Text>
        <Text>$BTC</Text>
      </OverviewItem>
      <OverviewItem>
        <Text>OPEN SOURCE</Text>
        <Text>YES</Text>
      </OverviewItem>
    </Overview>
    <Description>dgsgsags</Description>
    <Overview>
      <OverviewItem>
        <Text>TOTAL SUPPLY</Text>
        <Text>13113</Text>
      </OverviewItem>
      <OverviewItem>
        <Text>MAX SUPPLY</Text>
        <Text>2100000</Text>
      </OverviewItem>
    </Overview>
  </Container>
}

export default Coin;