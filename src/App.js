
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Toplist from "./components/Toplist";
import Home from "./components/Home";
import WalletContext from "./context";
import Portifolio from "./components/Portifolio"
import "./App.css";

const stocksData = [
  {
    imgUrl: "https://logo.clearbit.com/meta.com",
    name: "META",
    stockPrice: 400,
    sector: "Technology",
    marketCap: "900B",
    peRatio: "25",
  },
  {
    imgUrl: "https://logo.clearbit.com/google.com",
    name: "GOOGLE",
    stockPrice: 2800,
    sector: "Technology",
    marketCap: "1.8T",
    peRatio: "30",
  },
  {
    imgUrl: "https://logo.clearbit.com/tata.com",
    name: "TATA",
    stockPrice: 720,
    sector: "Automobile",
    marketCap: "200B",
    peRatio: "15",
  },
  {
    imgUrl: "https://logo.clearbit.com/apple.com",
    name: "APPLE",
    stockPrice: 150,
    sector: "Technology",
    marketCap: "2.5T",
    peRatio: "28",
  },
  {
    imgUrl: "https://logo.clearbit.com/amazon.com",
    name: "AMAZON",
    stockPrice: 3300,
    sector: "E-commerce",
    marketCap: "1.7T",
    peRatio: "60",
  },
  {
    imgUrl: "https://logo.clearbit.com/netflix.com",
    name: "NETFLIX",
    stockPrice: 550,
    sector: "Entertainment",
    marketCap: "250B",
    peRatio: "35",
  },
  {
    imgUrl: "https://logo.clearbit.com/tesla.com",
    name: "TESLA",
    stockPrice: 700,
    sector: "Automobile",
    marketCap: "800B",
    peRatio: "50",
  },
];

class App extends Component {
  state = {
    balance: 10000,
    buyed: [],
    amount: "",
    stocks: stocksData,
    Show:true,
    last:"Do a Transaction",
  };

  amountV= (event) => {
    this.setState({ amount: event.target.value });
  };

  addMoney = (amnt) => {
    this.setState((prevState) => ({
      balance: prevState.balance + Number(amnt),
    }));
  };

  withdrawMoney = (amnt) => {
    this.setState((prevState) => ({
      balance: prevState.balance - Number(amnt),
    }));
  };

  transactionBuy = (amnt, stockName) => {
    const { balance, buyed, stocks } = this.state;

    if (balance >= amnt) {
      const stockIndex = buyed.findIndex((stock) => stock.name === stockName);
      if (stockIndex !== -1) {
        const updatedBuyed = [...buyed];
        updatedBuyed[stockIndex].amount += Number(amnt);
        this.setState((prevState) => ({
          balance: prevState.balance - Number(amnt),
          buyed: [...updatedBuyed],
        }));
      } else {
        const stockToAdd = stocks.find((stock) => stock.name === stockName);
        const newBuyedStock = { ...stockToAdd, amount: Number(amnt) };
        this.setState((prevState) => ({
          balance: prevState.balance - Number(amnt),
          buyed: [...prevState.buyed, newBuyedStock],
          last:stockName
        }));
      }
    } else {
      alert("Amount Not Sufficient");
    }
  };

  transactionSell = (amnt, stockName) => {
    const { buyed } = this.state;

    const updatedBuyed = buyed
      .map((stock) => {
        if (stock.name === stockName) {
          const updatedAmount = stock.amount - amnt;

          if (updatedAmount > 0) {
            return { ...stock, amount: updatedAmount };
          } else {
            return null;
          }
        }
        return stock;
      })
      .filter((stock) => stock !== null);

    this.setState((prevState) => ({
      buyed: updatedBuyed,
      balance: prevState.balance + amnt,
      last:stockName
    }));
  };
  ShowClick=()=>{
    this.setState(({Show:true}))
  }
  setShowFalse = () => {
    this.setState({ Show: false });
  };

  render() {
    const { buyed, balance, amount,Show,stocks,last } = this.state;

    return (
      <WalletContext.Provider
        value={{
          buyed,
          balance,
          amount,
          stocks,
          Show,
          last,
          ShowClick:this.ShowClick,
          amountV: this.amountV,
          setShowFalse:this.setShowFalse,
          addMoney: this.addMoney,
          withdrawMoney: this.withdrawMoney,
          transactionBuy: this.transactionBuy,
          transactionSell: this.transactionSell,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toplist" element={<Toplist />} />
            <Route path="/Portifolio" element={<Portifolio />} />
          </Routes>
        </BrowserRouter>
      </WalletContext.Provider>
    );
  }
}

export default App;
