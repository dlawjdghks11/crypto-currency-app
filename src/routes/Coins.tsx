import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../api";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const CoinsList = styled.ul`
  
`;

const Coin = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.background};
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.background};
    cursor: pointer;
  }
`;

interface CoinInterface {
  id: string;
  name: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>({ queryKey: ["allCoins"], queryFn: getCoins})
  const navigate = useNavigate();

  return <Container>
    <Header>
      <Title>Coins</Title>
    </Header>
    <CoinsList>
      {isLoading ? "Loading.." : 
      data?.map(coin => 
      <Coin key={coin.id} onClick={() => navigate(`/${coin.id}`)}>
        {coin.name} &rarr;
      </Coin>)}
    </CoinsList>
  </Container>
}

export default Coins;