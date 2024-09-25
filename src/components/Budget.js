import React, { useState, useEffect } from "react";
import "./style/styling.css";

function Budget({ resetTrigger}) {
  const [budget, setBudget] = useState("");
  const [budgetError, setBudgetError] = useState("");

  const handleBudgetChange = (event) => {
    const value = event.target.value;

    // Validate if the input is numeric and has a maximum of 5 digits
    if (/^\d{0,5}$/.test(value) || value === "") {
      setBudget(value);
      setBudgetError(""); // Clear the error message
    } else {
      setBudgetError("Please enter a number.");
    }
  };

  const handleCheckField = () => {
    // Check if the budget field is empty
    if (budget.trim() === "") {
      setBudgetError("This field is required.");
    }
  };

  useEffect(() => {
    setBudget("");
    setBudgetError("");
  }, [resetTrigger,]);

  return (
    <div>
      <div className="col me-1">
        <h5>
          Budget <span className="asterisk">*</span>
        </h5>
        <input
          type="text"
          value={budget}
          onChange={handleBudgetChange}
          onBlur={handleCheckField}
          placeholder="Budget"
          className="input-field w-100 px-2 py-2"
        />
        {budgetError && <span className="text-danger">{budgetError}</span>}
      </div>
    </div>
  );
}

export default Budget;
