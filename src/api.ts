import axios from "axios";

export const getCoins = async () => {
  const res = await axios.get('https://api.coinpaprika.com/v1/tickers')

  return res.data.slice(0, 100)
}