import React from 'react'

const WalletContext = React.createContext({
  buyed: [],
  balance:1000,
  amount:"",
  stocks: [],
  Show:true,
  last:"Do a Transaction",
  setShowFalse:()=>{},
  ShowClick:()=>{},
  amountV:()=>{},
  addMoney: () => {},
  withdrawMoney: () => {},
  transactionBuy: () => {},
  transactionSell: () => {},
  decrementCartItemQuantity: () => {},
})

export default WalletContext