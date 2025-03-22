import { useQuery } from "@tanstack/react-query";
import { HistoryData } from "../types/api";
import { getHistoryData } from "../api";
import { useOutletContext } from "react-router-dom";
import { default as CandleStickChart } from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

interface ChartProps {
  coinId: string;
}

const Chart = () => {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<HistoryData[]>({
    queryKey: ["ohlcv", coinId],
    queryFn: () => getHistoryData(coinId),
  });
  const isDark = useRecoilValue(isDarkAtom);
  const options: ApexOptions = {
    chart: {
      id: "candlestick",
    },
    theme: {
      mode: isDark ? "dark" : "light",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `$ ${val.toFixed(2)}`,
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
