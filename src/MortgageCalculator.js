import React from "react";
import calculatorIcon from "./assets/icon-calculator.svg";

function MortgageCalculator({
  mortgageAmount,
  setMortgageAmount,
  mortgageTerm,
  setMortgageTerm,
  interestRate,
  setInterestRate,
  mortgageType,
  setMortgageType,
  calculateRepayments,
  clearFields,
}) {
  return (
    <div className="form-container">
      <div className="mortgage-calculator-header">
        <h1>Mortgage Calculator</h1>
        <div className="clear-all">
          <a href="#" onClick={clearFields}>
            Clear All
          </a>
        </div>
      </div>

      <label htmlFor="mortgageAmount">Mortgage Amount</label>
      <div className="input-group-currency">
        <input
          id="mortgageAmount"
          type="text"
          value={mortgageAmount}
          onChange={(e) => setMortgageAmount(e.target.value)}
        />
        <span className="currency-symbol">£</span>
      </div>

      <div className="form-group-inline">
        <div className="input-group">
          <label htmlFor="mortgageTerm">Mortgage Term</label>
          <input
            id="mortgageTerm"
            type="number"
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(e.target.value)}
          />
          <span className="unit-label">years</span>
        </div>
        <div className="input-group">
          <label htmlFor="interestRate">Interest Rate</label>
          <input
            id="interestRate"
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <span className="unit-label">%</span>
        </div>
      </div>

      <label>Mortgage Type</label>
      <div className="radio-container-vertical">
        <label className="radio-option">
          <input
            type="radio"
            name="mortgageType"
            value="repayment"
            checked={mortgageType === "repayment"}
            onChange={() => setMortgageType("repayment")}
          />
          Repayment
        </label>
        <label className="radio-option">
          <input
            type="radio"
            name="mortgageType"
            value="interest-only"
            checked={mortgageType === "interest-only"}
            onChange={() => setMortgageType("interest-only")}
          />
          Interest Only
        </label>
      </div>

      <div className="button-container">
        <button onClick={calculateRepayments}>
          <img src={calculatorIcon} alt="Calculator Icon" />
          Calculate Repayments
        </button>
      </div>
    </div>
  );
}

export default MortgageCalculator;
