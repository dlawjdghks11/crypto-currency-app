import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../api";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  
`;

const CoinsList = styled.ul`
  
`;

const Coin = styled.li`

`;

const Title = styled.h1`
  
`;

interface CoinInterface {
  id: string;
  name: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>({ queryKey: ["allCoins"], queryFn: getCoins})

  return <Container>
    <Header>
      <Title>Coins</Title>
    </Header>
    <CoinsList>
      {isLoading ? "Loading.." : 
      data?.map(coin => 
      <Coin key={coin.id}>
        <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
      </Coin>)}
    </CoinsList>
  </Container>
}

export default Coins;