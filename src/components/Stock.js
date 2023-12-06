import React from "react";

function Stock({stock, stockAddPortfolio, stockRemovePortfolio}) {
  const {id, ticket, name, type, price} = stock
  // "id": 1,
  // "ticker": "GOOG",
  // "name": "Google",
  // "type": "Tech",
  // "price": 1194.8

  function addStock(){
    //console.log("ME Me")
    stockAddPortfolio(id)
  }

  return (
    <div>
      <div className="card" onClick={addStock}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
