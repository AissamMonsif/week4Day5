import React from "react";
import IllustrationEmpty from "./assets/illustration-empty.svg";

function Results({ monthlyPayment, totalPayment }) {
  return (
    <div className="results-container">
      {!monthlyPayment ? (
        <div className="empty-state">
          <img src={IllustrationEmpty} alt="Illustration" />
          <p>
            Complete the form and click "Calculate Repayments" to see your
            results.
          </p>
        </div>
      ) : (
        <div className="results">
          <h2>Your Results</h2>
          <p>
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculate
            repayments" again.
          </p>
          <div className="results-h">
            <h3>Your monthly repayments</h3>
            <p className="result-amount-month">£{monthlyPayment}</p>
            <h4>Total you'll repay over the term</h4>
            <p className="result-amount-total">£{totalPayment}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
