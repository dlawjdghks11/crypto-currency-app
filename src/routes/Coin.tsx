import { useParams } from "react-router-dom";


interface Params {
  coinId: string;
}

const Coin = () => {
  const params = useParams<Params>()
  console.log(params.coinId)
  return <div>{params.coinId}</div>
}

export default Coin;