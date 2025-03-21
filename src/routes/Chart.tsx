import { useQuery } from "@tanstack/react-query";
import { HistoryData } from "../types/api";
import { getHistoryData } from "../api";
import { useOutletContext } from "react-router-dom";
import { default as CandleStickChart } from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<HistoryData[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => getHistoryData(coinId),
  });
  const options = {
    chart: {
      id: "candlestick",
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
  };
  const series = [
    {
      data: data
        ? data.map((el) =>
            [el.time_close, el.open, el.high, el.low, el.close].map(Number),
          )
        : [],
    },
  ];

  return (
    <div>
      {isLoading ? (
        "Loading.."
      ) : (
        <CandleStickChart
          options={options}
          series={series}
          type={"candlestick"}
          width={"100%"}
          height={300}
        />
      )}
    </div>
  );
};

export default Chart;
