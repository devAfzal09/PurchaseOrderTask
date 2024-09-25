import React, { useState, useEffect } from "react";
import "./style/styling.css";

function ReceivedDate({ resetTrigger }) {
  const [receivedDate, setReceivedDate] = useState("");
  const [dateError, setDateError] = useState("");

  const handleDateChange = (event) => {
    setReceivedDate(event.target.value);
    setDateError(""); // Clear the error if a valid date is selected
  };

  const handleCheckField = () => {    
    if (receivedDate.trim() === "") {
      setDateError("This field is required.");
    }
  };

  useEffect(() => {
    setReceivedDate(""); // Reset the date input
    setDateError(""); // Clear the error message
  }, [resetTrigger]);
  return (
    <div>
      <h5>
        Received On <span className="asterisk">*</span>
      </h5>
      <div className="input-field">
        <input
          type="text"
          value={receivedDate}
          className="client-dropdown w-100 px-1 py-2"
          placeholder="Received On"
          onChange={handleDateChange}
          onBlur={handleCheckField}
          onFocus={(e) => {
            e.target.type = "date";
          }}
        />
      </div>

      {dateError && <span className="text-danger">{dateError}</span>}
    </div>
  );
}

export default ReceivedDate;
