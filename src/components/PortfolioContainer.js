import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioData, stockAddPortfolio}) {

  const portfolioStocks = portfolioData.map((x) => {
    return <Stock key={x.id} stock={x} stockAddPortfolio={stockAddPortfolio}/>
  })

  function removeStock(){
    //console.log("ME Me")
    // stockRemovePortfolio(id)
  }


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks
      }
    </div>
  );
}

export default PortfolioContainer;
