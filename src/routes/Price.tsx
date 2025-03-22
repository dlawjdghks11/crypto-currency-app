import { PriceData } from "../types/api";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

const PriceContainer = styled.div`
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

const DataCard = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 4px;
    color: ${(props) => props.theme.text};
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .positive {
    color: #16a34a;
  }

  .negative {
    color: #dc2626;
  }

  .neutral {
    color: #4b5563;
  }
`;

interface PriceProps {
  priceData: PriceData;
}

const Price = () => {
  const { priceData } = useOutletContext<PriceProps>();
  const {
    quotes: {
      USD: {
        price,
        market_cap,
        percent_change_24h,
        ath_price,
        percent_from_price_ath,
      },
    },
  } = priceData;

  return (
    <PriceContainer>
      <Grid>
        <DataCard>
          <h3>Current Price</h3>
          <p className="positive">${price.toFixed(2)}</p>
        </DataCard>
        <DataCard>
          <h3>Market Cap</h3>
          <p className="neutral">${market_cap.toLocaleString()}</p>
        </DataCard>
        <DataCard>
          <h3>24h Change</h3>
          <p className={percent_change_24h > 0 ? "positive" : "negative"}>
            {percent_change_24h.toFixed(2)}%
          </p>
        </DataCard>
        <DataCard>
          <h3>All-Time High</h3>
          <p className="neutral">${ath_price.toFixed(2)}</p>
        </DataCard>
        <DataCard>
          <h3>From ATH</h3>
          <p className={percent_from_price_ath > 0 ? "negative" : "positive"}>
            {percent_from_price_ath.toFixed(2)}%
          </p>
        </DataCard>
      </Grid>
    </PriceContainer>
  );
};

export default Price;
