import { useParams } from "react-router-dom";

const Coin = () => {
  const params = useParams()
  const coinId = params.coinId ?? "";
  return <div>{coinId}</div>
}

export default Coin;