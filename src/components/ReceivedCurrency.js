import React, { useState } from "react";
import "./style/styling.css";

function ReceivedCurrency() {
  const [currency, setCurrency] = useState("USD"); 

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

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <h5>
        Currency <span className="asterisk">*</span>
      </h5>
      <select
        id=""
        value={currency}
        onChange={handleCurrencyChange}
        className="input-field w-100 px-1 py-2"
      >
        {currencies.map((currencyItem, currencyIndex) => (
          <option key={currencyIndex} value={currencyItem.value}>
            {currencyItem.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ReceivedCurrency;
