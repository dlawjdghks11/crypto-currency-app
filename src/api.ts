import axios from "axios";
import { InfoData, PriceData, CoinInterface, HistoryData } from "./types/api";

const BASE_URL = "https://api.coinpaprika.com/v1";

export const getAllCoins = async () => {
  const res = await axios.get<CoinInterface[]>(`${BASE_URL}/tickers`);

  return res.data.slice(0, 100);
};

export const getInfoData = async (coinId: string) => {
  const res = await axios.get<InfoData>(`${BASE_URL}/coins/${coinId}`);

  return res.data;
};

export const getPriceData = async (coinId: string) => {
  const res = await axios.get<PriceData>(`${BASE_URL}/tickers/${coinId}`);

  return res.data;
};

export const getHistoryData = async (coinId: string) => {
  const res = await axios.get<HistoryData[]>(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`,
  );

  return res.data;
};
