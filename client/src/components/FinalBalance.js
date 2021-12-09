import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const FinalBalance = () => {
  const { transactions } = useContext(GlobalContext);

  // const units = transactions.map(transaction => transaction.units);
  // const quantity = units
  //   .reduce((acc, item) => (acc += item), 0);
  const wacunits = transactions.map(transaction => transaction.wacunits);
  const quantity = wacunits.length === 0 ? 0:wacunits[wacunits.length -1];

  const wacPrices = transactions.map(transaction => transaction.wacuprice);
  const unitPrice = wacPrices.length === 0 ? 0:wacPrices[wacPrices.length -1];

  // const value = transactions.map(transaction => transaction.value);
  // const total = (value.reduce((acc, item) => (acc += item), 0)).toFixed(2);
  const wacBalance = transactions.map(transaction => transaction.wacvalue);
  const balance = wacBalance.length === 0 ? 0:wacBalance[wacBalance.length -1];

  return (
  <>
    <div className="inc-exp-container">
      <div>
        <h4>Quantity</h4>
        <p className="money">{numberWithCommas(quantity)}</p>
      </div>
      <div>
        <h4>Unit Price</h4>
        <p className="money">Rs. {numberWithCommas(unitPrice)}</p>
      </div>
      <div>
        <h4>Value</h4>
        <p className="money">Rs. {numberWithCommas(balance)}</p>
      </div>
    </div>

  </>
  )
}
