import React, { Component } from "react";
import StockItem from "../StockItem";
import Wallet from "../Wallet";
import WalletContext from "../../context";
import "./index.css";

class Portifolio extends Component {
  static contextType = WalletContext;

  componentDidMount() {
    const { setShowFalse } = this.context;
    setShowFalse();
  }

  render() {
    const { buyed, balance, Show } = this.context;
   
    return (
      <>
        <div className="home-container">
          <header>
            <h1>Sell at High Price</h1>
          </header>
        </div>
        
        <div className="dashboard-container">
          {buyed.length === 0 ? (
            <div className="stock-list-none">

            <h1>Buy Some Stocks</h1>
            </div>
          ) : (
            <ul className="stock-list">
              {buyed.map((stock) => (
                <StockItem
                  key={stock.name}
                  stock={stock}
                  transactionBuy={this.context.transactionBuy}
                  transactionSell={this.context.transactionSell}
                  show={Show}
                />
              ))}
            </ul>
          )}

          <div className="wallet-contr">
            <Wallet
              addMoney={this.context.addMoney}
              withdrawMoney={this.context.withdrawMoney}
              amount={this.context.amount}
              balance={balance}
              Showbtn={this.context.Showbtn}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Portifolio;
