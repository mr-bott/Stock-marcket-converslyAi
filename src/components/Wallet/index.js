
import React from "react";
import "./index.css";
import WalletContext from "../../context";

const Wallet = () => (
  <WalletContext.Consumer>
    {(value) => {
      const { addMoney, withdrawMoney, amountV, balance,amount,last } = value;

      return (
        <div className="wallet-container">
          <div className="wallet-header">
            <h2 className="wallet-title">Wallet Information</h2>
          </div>
          <div className="wallet-details">
            <div className="wallet-item">
              <span className="wallet-label">Wallet Address:</span>
              <span className="wallet-value">Murali</span>
            </div>
            <div className="wallet-item">
              <span className="wallet-label">Balance:</span>
              <span className="wallet-value">${balance}</span>
            </div>
            <div className="wallet-item">
              <span className="wallet-label">Last Transaction:</span>
              <span className="wallet-value">{last}</span>
            </div>
          </div>
          <div className="wallet-actions">
            <input
              type="number"
              value={amount}
              onChange={(event)=>amountV(event)}
              className="wallet-input"
              placeholder="Enter amount"
            />
            <button
              className="wallet-button"
              onClick={() => addMoney(amount)}
            >
              Add Money
            </button>
            <button
              className="wallet-button withdraw"
              onClick={() => withdrawMoney(amount)}
            >
              Withdraw Money
            </button>
          </div>
        </div>
      );
    }}
  </WalletContext.Consumer>
);

export default Wallet;
