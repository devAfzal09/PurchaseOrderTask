import React, { useState, useEffect } from "react";
import "./style/styling.css";

function ReceivedName({ resetTrigger}) {
  const [receivedFrom, setReceivedFrom] = useState("");
  const [receivedFromError, setReceivedFromError] = useState("");

  const handleReceivedFromChange = (event) => {
    const value = event.target.value;

    if (/[^A-Za-z\s]/.test(value)) {
      setReceivedFromError("Please enter only letters and spaces.");
      return; 
    }

    setReceivedFrom(value);

    if (value.trim() === "") {
      setReceivedFromError("This field is required.");
    } else {
      setReceivedFromError(""); // Clear the error message if valid
    }
  };

  useEffect(() => {
    setReceivedFrom("");
    setReceivedFromError("");
  }, [resetTrigger]);
  return (
    <div>
      <h5>
        Received From <span className="asterisk">*</span>
      </h5>
      <input
        type="text"
        value={receivedFrom}
        onChange={handleReceivedFromChange}
        placeholder="Received From Name"
        className="input-field w-100 px-2 py-2"
      />
      {receivedFromError && (
        <span className="text-danger">{receivedFromError}</span>
      )}
    </div>
  );
}

export default ReceivedName;
