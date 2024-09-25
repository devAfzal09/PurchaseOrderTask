import React, { useState, useEffect } from "react";
import "./style/styling.css";
import JobCurrency from "./JobCurrency";

function JobTalent({ selectedOrderType, resetTrigger, talents }) {
  const [jobCheckedState, setJobCheckedState] = useState({});
  const [selectedTalents, setSelectedTalents] = useState([]);
  const [formError, setFormError] = useState("");
  const [talentInputs, setTalentInputs] = useState({});

  useEffect(() => {
    if (
      Array.isArray(talents) &&
      talents.length > 1 &&
      Array.isArray(talents[1]?.talent)
    ) {
      const initialCheckboxState = {}; // Reset and keep one checkbox true
      talents[0].talent.forEach((_, index) => {
        initialCheckboxState[`checkbox${index}`] = index === 0; // Only check the first checkbox
      });
      setSelectedTalents(talents[0].talent);
      setJobCheckedState(initialCheckboxState);
      setTalentInputs({});
    } else {
      setSelectedTalents([]);
      setJobCheckedState({});
    }
  }, [resetTrigger, talents]);

  const handleTalentInputChange = (talentIndex, field, value) => {
    setTalentInputs((prev) => ({
      ...prev,
      [talentIndex]: {
        ...prev[talentIndex],
        [field]: value,
      },
    }));
  };

  const handleJobSectionCheckboxChange = (index) => {
    const updatedJobCheckedState = {
      ...jobCheckedState,
      [`checkbox${index}`]: !jobCheckedState[`checkbox${index}`], // Toggle the specific checkbox
    };

    if (selectedOrderType === "Individual PO") {
      Object.keys(updatedJobCheckedState).forEach((key) => {
        if (key !== `checkbox${index}`) {
          updatedJobCheckedState[key] = false;
        }
      });
    }

    setJobCheckedState(updatedJobCheckedState);
  };

  const validateForm = () => {
    const selectedCount = Object.values(jobCheckedState).filter(Boolean).length;

    if (selectedOrderType === "Individual PO" && selectedCount > 1) {
      setFormError("For 'Individual PO', only one talent can be selected.");
      return false;
    }

    if (selectedOrderType === "Group PO" && selectedCount < 2) {
      setFormError("For 'Group PO', at least two talents must be selected.");
      return false;
    }

    setFormError(""); // Clear any previous errors
    return true;
  };

  return (
    <div>
      {formError && <div className="text-danger mb-2">{formError}</div>}
      {selectedTalents.length > 0 && (
        <div className="row py-2">
          <div className="col">
            {selectedTalents.map((talentItems, talentIndex) => (
              <div key={talentIndex}>
                <div className="row py-1">
                  <div className="col d-flex justify-content-start align-items-center">
                    <input
                      className="p-3"
                      type="checkbox"
                      checked={
                        jobCheckedState[`checkbox${talentIndex}`] || false
                      }
                      onChange={() =>
                        handleJobSectionCheckboxChange(talentIndex)
                      }
                    />
                    <h5 className="fw-bolder ms-2">{talentItems}</h5>
                  </div>
                </div>
                {jobCheckedState[`checkbox${talentIndex}`] && (
                  <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
                      <h5 className="job-fonts">Contract Duration</h5>
                      <input
                        type="text"
                        value={talentInputs[talentIndex]?.contract || ""}
                        onChange={(e) =>
                          handleTalentInputChange(
                            talentIndex,
                            "contract",
                            e.target.value
                          )
                        }
                        placeholder="Current duretion"
                        className="input-field w-100 px-2 py-2"
                      />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-3 d-flex">
                      <div className="col me-1">
                        <h5 className="job-fonts">Bills Rate</h5>
                        <input
                          type="text"
                          value={talentInputs[talentIndex]?.bills || ""}
                          onChange={(e) =>
                            handleTalentInputChange(
                              talentIndex,
                              "bills",
                              e.target.value
                            )
                          }
                          placeholder="Bills Rate"
                          className="input-field w-100 px-2 py-2"
                        />
                      </div>
                      <div className="col">
                        <JobCurrency />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 d-flex mb-3">
                      <div className="col me-1">
                        <h5 className="job-fonts">Standard Time BR</h5>
                        <input
                          type="text"
                          value={talentInputs[talentIndex]?.standardTime || ""}
                          onChange={(e) =>
                            handleTalentInputChange(
                              talentIndex,
                              "standardTime",
                              e.target.value
                            )
                          }
                          placeholder="Bills Rate"
                          className="input-field w-100 px-2 py-2"
                        />
                      </div>
                      <div className="col">
                        <JobCurrency />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mb-3 d-flex">
                      <div className="col me-1">
                        <h5 className="job-fonts">Over Time BR</h5>
                        <input
                          type="text"
                          value={talentInputs[talentIndex]?.overTime || ""}
                          onChange={(e) =>
                            handleTalentInputChange(
                              talentIndex,
                              "overTime",
                              e.target.value
                            )
                          }
                          placeholder="Over Time BR"
                          className="input-field w-100 px-2 py-2"
                        />
                      </div>
                      <div className="col">
                        <JobCurrency />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default JobTalent;
