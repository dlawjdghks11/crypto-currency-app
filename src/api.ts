import axios from "axios";
import { InfoData, PriceData, CoinInterface, HistoryData } from "./types/api";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SUB_URL = process.env.REACT_APP_SUB_URL;

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
  const res = await axios.get<HistoryData[]>(`${SUB_URL}?coinId=${coinId}`);

  return res.data;
};
