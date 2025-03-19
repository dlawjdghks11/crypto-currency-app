import axios from "axios";
import { InfoData, PriceData, CoinInterface } from "./types/api";

export const getAllCoins = async () => {
  const res = await axios.get<CoinInterface[]>(
    "https://api.coinpaprika.com/v1/tickers",
  );

  return res.data.slice(0, 100);
};

export const getInfoData = async (coinId: string) => {
  const res = await axios.get<InfoData>(
    `https://api.coinpaprika.com/v1/coins/${coinId}`,
  );

  return res.data;
};

export const getPriceData = async (coinId: string) => {
  const res = await axios.get<PriceData>(
    `https://api.coinpaprika.com/v1/tickers/${coinId}`,
  );

  return res.data;
};
