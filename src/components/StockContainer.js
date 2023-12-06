import React from "react";
import Stock from "./Stock";

function StockContainer({displayedData, stockAddPortfolio}) {

  const allStocks = displayedData.map((x) => {
    return <Stock key={x.id} stock={x} stockAddPortfolio={stockAddPortfolio} />
  })

  return (


    <div>
      <h2>Stocks</h2>
      {allStocks}
    </div>
  );
}

export default StockContainer;
