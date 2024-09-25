import React, { useState } from "react";
import "./style/styling.css";

function JobCurrency() {
  const [jobCurrency, setJobCurrency] = useState("USD"); 

  const currencies = [
    { value: "USD", label: "USD - Dollars ($)" },
    { value: "IND", label: "IND - Rupee (₹)" },
    { value: "EUR", label: "EUR - Euro (€)" },
    { value: "GBP", label: "GBP - British Pound (£)" },
    { value: "AUD", label: "AUD - Australian Dollar (A$)" },
    { value: "CAD", label: "CAD - Canadian Dollar (C$)" },
    { value: "JPY", label: "JPY - Japanese Yen (¥)" },
    { value: "CNY", label: "CNY - Chinese Yuan (C¥)" },
    { value: "NZD", label: "NZD - New Zealand Dollar (NZ$)" },
    { value: "SGD", label: "SGD - Singapore Dollar (SG$)" },
  ];

  const handleJobCurrencyChange = (event) => {
    setJobCurrency(event.target.value);
  };
  return (
    <div>
      <h5 className="job-fonts">Currency </h5>
      <select
        name=""
        id=""
        value={jobCurrency}
        onChange={handleJobCurrencyChange}
        className="input-field w-100 px-1 py-2"
      >
        {currencies.map((jobCurrenciesItem, jobCurrenciesIndex) => (
          <option key={jobCurrenciesIndex} value={jobCurrenciesItem.value}>
            {jobCurrenciesItem.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default JobCurrency;
