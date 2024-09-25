import React, { useState, useEffect } from "react";
import "./style/styling.css";

function PurchaseOrderNo({ resetTrigger }) {
  const [poNumber, setPoNumber] = useState("");
  const [poNumberError, setPoNumberError] = useState("");

  const handlePoNumberChange = (e) => {
    const value = e.target.value;
    setPoNumber(value);

    if (value.trim() === "") {
      setPoNumberError("This field is Required");
    } else {
      setPoNumberError("");
    }
  };

  useEffect(() => {
    setPoNumber(""); // Reset the field
    setPoNumberError(""); // Clear the error message
  }, [resetTrigger]);
  return (
    <div>
      <h5>
        Purchase Order No <span className="asterisk">*</span>
      </h5>
      <input
        type="text"
        value={poNumber}
        onChange={handlePoNumberChange}
        className="client-dropdown w-100 px-1 py-2"
        placeholder="PO Number"
        required
      />
      {poNumberError && <span className="text-danger">{poNumberError}</span>}
    </div>
  );
}

export default PurchaseOrderNo;
