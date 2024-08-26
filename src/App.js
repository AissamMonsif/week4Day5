import React, { useState } from "react";
import MortgageCalculator from "./MortgageCalculator";
import Results from "./Results";
import "./App.css";

function App() {
  const [mortgageAmount, setMortgageAmount] = useState("");
  const [mortgageTerm, setMortgageTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [mortgageType, setMortgageType] = useState("repayment");
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateRepayments = () => {
    const P = parseFloat(mortgageAmount.replace(/,/g, ""));
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseInt(mortgageTerm) * 12;

    let monthly = 0;
    if (mortgageType === "repayment") {
      monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      monthly = P * r;
    }

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment((monthly * n).toFixed(2));
  };

  const clearFields = () => {
    setMortgageAmount("");
    setMortgageTerm("");
    setInterestRate("");
    setMortgageType("repayment");
    setMonthlyPayment(null);
    setTotalPayment(null);
  };

  return (
    <div className="app-container">
      <div className="mortgage-calculator">
        <MortgageCalculator
          mortgageAmount={mortgageAmount}
          setMortgageAmount={setMortgageAmount}
          mortgageTerm={mortgageTerm}
          setMortgageTerm={setMortgageTerm}
          interestRate={interestRate}
          setInterestRate={setInterestRate}
          mortgageType={mortgageType}
          setMortgageType={setMortgageType}
          calculateRepayments={calculateRepayments}
          clearFields={clearFields}
        />
        <Results monthlyPayment={monthlyPayment} totalPayment={totalPayment} />
      </div>
    </div>
  );
}

export default App;
