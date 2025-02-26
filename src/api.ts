import axios from "axios";

export const getCoins = async () => {
  const res = await axios.get('https://api.coinpaprika.com/v1/tickers')

  return res.data.slice(0, 100)
}

export const getInfoData = async (coinId: string) => {
  const res = await axios.get(`https://api.coinpaprika.com/v1/coins/${coinId}`)

  return res.data;
}

export const getPriceData = async (coinId: string) => {
  const res = await axios.get(`https://api.coinpaprika.com/v1/tickers/${coinId}`)

  return res.data;
}