import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";

function MainContainer() {

  const [data, setData] = useState([])
  const [displayedData, setDisplayedData] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");


  useEffect(() => {
    // Adding field to data
    function addFieldAndSetData(inputObject){
      // Adding inPortfolio: false to all data in original JSON
      const newObject = inputObject.map(obj => ({ ...obj, inPortfolio: false }))
      setData(newObject)
      console.log(newObject)
      return newObject
    }
    const url = "http://localhost:3001/stocks"
    fetch(url,{
                method: "GET",
                headers: {"Content-type":"application/json"},
                body: null
      })
      .then(res => res.json())
      .then(data => addFieldAndSetData(data))
    },[]
  );


  function stockAddPortfolio(id){
    setData(
      data.map((item) => {
          const inPortfolio = !item.inPortfolio
          if (item.id===id) {
            return { ...item, inPortfolio}; // modifies the individual portfolio keyvalue
          }
          else {
            return item
          }
        }
    ))

  }

  // function getPortfolio(d){
  //   const newPortfolio = d.filter((x) => {return x.inPortfolio})
  //   setPortfolio(newPortfolio)
  //     }
  //   // getPortfolio(data)

  function onChangeSort(i){
    console.log("aeg")
    setSortBy(i)
    console.log(sortBy)
  };
//[...data]

  function onChangeFilter(i){
    console.log("yooooo")
    setFilterBy(i)
    console.log(filterBy)

    // const newDataFilter = data.filter((x) => {
    //   if (filterBy === "None") {return true}
    //   else 
    //   {return x.type === filterBy}
    //   })
    // setData(newDataFilter) // Not working, getting tired lol
  }


  const portfolio = data    
  .filter((x) => {return x.inPortfolio})
  .sort((a, b) => {
    // Convert names to lowercase for case-insensitive sorting
    if (sortBy === "Alphabetically") {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
  
    // Compare names
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  } else { 
    return a.price - b.price
  }
});

  return (
    <div>
      <SearchBar  
              sortBy={sortBy}
              onChangeSort={onChangeSort}
              filterBy={filterBy}
              onChangeFilter={onChangeFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer displayedData={data} stockAddPortfolio={stockAddPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioData={portfolio} stockAddPortfolio={stockAddPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
