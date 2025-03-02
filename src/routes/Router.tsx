import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";
import Chart from "./Chart";
import Price from "./Price";
import Header from "./Header";

export const Router = () => {
  return (
    <BrowserRouter 
      future={{ 
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }} 
      basename="/react-masterclass"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}