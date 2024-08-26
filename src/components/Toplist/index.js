
import React, { Component } from "react";
import StockItem from "../StockItem";
import Wallet from "../Wallet";
import WalletContext from "../../context";
import "./index.css";

class Toplist extends Component {
  
  static contextType = WalletContext;

  componentDidMount() {
    const { ShowClick} = this.context;
    ShowClick()
  }

  render() {
    const { stocks, balance, Show } = this.context;
    return (
      <>
        <div className="home-container">
          <header>
            <h1>Today Trendings</h1>
          </header>
        </div>

        <div className="dashboard-container">
          <ul className="stock-list">
            {stocks.map((stock) => (
              <StockItem
                key={stock.name}
                stock={stock}
                transactionBuy={this.context.transactionBuy}
                transactionSell={this.context.transactionSell}
                show={Show}
              />
            ))}
          </ul>

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

export default Toplist;
