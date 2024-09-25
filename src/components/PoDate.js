import React, { useState, useEffect } from "react";
import "./style/styling.css";

function PoDate({ resetTrigger,}) {
  const [poStartDate, setPoStartDate] = useState("");
  const [poEndDate, setPoEndDate] = useState("");
  const [startDateError, setStartDateError] = useState("");
  const [endDateError, setEndDateError] = useState("");

  const handleStartDateChange = (event) => {
    const selectedDate = event.target.value;
    setPoStartDate(selectedDate);
    if (selectedDate) {
      setStartDateError("");
    }
  };

  const handleEndDateChange = (event) => {
    const selectedEndDate = event.target.value;
    setPoEndDate(selectedEndDate);
    if (selectedEndDate) {
      setEndDateError("");
    }
  };

  const validateStartDate = () => {
    if (!poStartDate) {
      setStartDateError("This field is required");
    } else {
      setStartDateError("");
    }
  };

  const validateEndDate = () => {
    if (!poEndDate) {
      setEndDateError("This field is required");
    } else {
      setEndDateError("");
    }
  };

  useEffect(() => {
    setPoStartDate("");
    setPoEndDate("");
    setStartDateError("");
    setEndDateError("");
  }, [resetTrigger]);

  return (
    <div>
      <div className="d-flex">
        <div className="col me-1">
          <h5>
            PO Start Date <span className="asterisk">*</span>
          </h5>
          <input
            type="text"
            value={poStartDate}
            onChange={handleStartDateChange}
            onBlur={validateStartDate}
            onFocus={(e) => (e.target.type = "date")}
            className="input-field w-100 px-2 py-2"
            placeholder="Start Date"
          />
          {startDateError && (
            <span className="text-danger">{startDateError}</span>
          )}
        </div>
        <div className="col">
          <h5>
            PO End Date <span className="asterisk">*</span>
          </h5>
          <input
            type="text"
            value={poEndDate}
            onChange={handleEndDateChange}
            onBlur={validateEndDate}
            onFocus={(e) => (e.target.type = "date")}
            min={poStartDate}
            disabled={!poStartDate}
            className="input-field w-100 px-2 py-2"
            placeholder="End Date"
          />
          {endDateError && <span className="text-danger">{endDateError}</span>}
        </div>
      </div>
    </div>
  );
}

export default PoDate;
