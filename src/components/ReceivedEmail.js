import React, { useState, useEffect } from "react";
import "./style/styling.css";

function ReceivedEmail({ resetTrigger }) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Email validation
    if (value.trim() === "") {
      setEmailError("This field is required");
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(""); // Clear the error message
    }
  };

  useEffect(() => {
    setEmail("");
    setEmailError("");
  }, [resetTrigger]);
  return (
    <div>
      <h5>
        Email <span className="asterisk">*</span>
      </h5>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Received From Email ID"
        className="input-field w-100 px-2 py-2"
      />
      {emailError && <span className="text-danger">{emailError}</span>}
    </div>
  );
}

export default ReceivedEmail;
