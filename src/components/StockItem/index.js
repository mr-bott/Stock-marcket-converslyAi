
import React from "react";
import "./index.css";

const StockItem = (props) => {
  const { stock, show, transactionBuy, transactionSell } = props;
  const { imgUrl, name, stockPrice, sector, marketCap, peRatio, amount } = stock;

  const price = show ? stockPrice : amount;
  console.log(show)
  const handleClick = () => {
    if (show) {
      transactionBuy(stockPrice, name);
    } else {
      transactionSell(stockPrice, name);
    }
  };
const stylebtn=show ?"buy-button":"sell-button"
  return (
    <li className="stock-li-item">
      <div className="stock-item">
        <img src={imgUrl} alt={name} className="stock-img" />
        <div className="stock-info">
          <div className="name-container">
            <h3 className="stock-name">{name}</h3>
            <p className="stock-sector">Sector: {sector}</p>
          </div>
          <p className="stock-market-cap">Market Cap: {marketCap}</p>
          <p className="stock-pe-ratio">P/E Ratio: {peRatio}</p>
          <p className="stock-price">Price: ${price}</p>
        </div>
        <button className={stylebtn} onClick={handleClick}>
          {show ? "Buy" : "Sell"}
        </button>
      </div>
    </li>
  );
};

export default StockItem;
