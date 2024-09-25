import { useState, useEffect } from "react";
import "./style/styling.css";
import { FaTrash } from "react-icons/fa";
import JobCurrency from "./JobCurrency";

function JobSection({ jobs, resetTrigger }) {
  const [selectedJobTitle, setSelectedJobTitle] = useState(
    jobs[0]?.title || ""
  );
  const [selectedJobId, setSelectedJobId] = useState(jobs[0]?.jobId || "");
  const [selectedTalents, setSelectedTalents] = useState(jobs[0]?.talent || []);
  const [jobCheckedState, setJobCheckedState] = useState({
    checkbox0: true,
  });

  const [talentInputs, setTalentInputs] = useState({});
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (jobs.length > 0) {
      const firstJob = jobs[0];
      setSelectedJobTitle(firstJob.title);
      setSelectedJobId(firstJob.jobId);
      setSelectedTalents(firstJob.talent);
    }
  }, [jobs]);

  useEffect(() => {
    setTalentInputs({});
  }, [resetTrigger]);

  const handleTalentInputChange = (talentIndex, field, value) => {
    setTalentInputs((prev) => ({
      ...prev,
      [talentIndex]: {
        ...prev[talentIndex],
        [field]: value,
      },
    }));
  };

  const handleJobTitleChange = (event) => {
    const title = event.target.value;
    setSelectedJobTitle(title);
    const job = jobs.find((job) => job.title === title);
    if (job) {
      setSelectedTalents(job.talent);
      setSelectedJobId(job.jobId);
    }
  };

  const handleJobSectionCheckboxChange = (index) => {
    setJobCheckedState((prev) => ({
      ...prev,
      [`checkbox${index}`]: !prev[`checkbox${index}`], // Toggle the specific checkbox
    }));
  };

  const validateField = (fieldName, value, talentIndex) => {
    const errors = { ...validationErrors };

    if (!value) {
      errors[`${talentIndex}-${fieldName}`] = `${fieldName} is required`;
    } else {
      delete errors[`${talentIndex}-${fieldName}`];
    }

    setValidationErrors(errors);
  };

  return (
    <>
      <div className="container-fluid job-section ">
        <div className="row mt-3 py-2 border-bottom border-secondary">
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <h5>
              Job Title/REQ Name <span className="asterisk">*</span>
            </h5>
            <select
              value={selectedJobTitle}
              onChange={handleJobTitleChange}
              className="client-dropdown w-100 px-1 py-2"
            >
              {jobs.map((jobTitaleItem, jobTitleIndex) => (
                <option value={jobTitaleItem.title} key={jobTitleIndex}>
                  {jobTitaleItem.title}
                </option>
              ))}

              {/* <option value={jobTitle}>{jobTitle}</option>                                         */}
            </select>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <h5>
              Job ID/REQ ID <span className="asterisk">*</span>
            </h5>
            <input
              type="text"
              value={selectedJobId}
              className="job-input w-100 px-2 py-2"
              readOnly
            />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-6 d-flex justify-content-end align-items-center">
            <h5 className="trash-icon me-2">
              <FaTrash />
            </h5>
            <h5 className="trash-icon">-</h5>
          </div>
        </div>

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
                          onBlur={() =>
                            validateField(
                              "Contract Duration",
                              talentInputs[talentIndex]?.contract,
                              talentIndex
                            )
                          }
                          placeholder="Current duration"
                          className="input-field w-100 px-2 py-2"
                        />
                        {validationErrors[
                          `${talentIndex}-Contract Duration`
                        ] && (
                          <p className="text-danger">
                            {
                              validationErrors[
                                `${talentIndex}-Contract Duration`
                              ]
                            }
                          </p>
                        )}
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
                            onBlur={() =>
                              validateField(
                                "Bills Rate",
                                talentInputs[talentIndex]?.bills,
                                talentIndex
                              )
                            }
                            placeholder="Bills Rate"
                            className="input-field w-100 px-2 py-2"
                          />
                          {validationErrors[`${talentIndex}-Bills Rate`] && (
                            <p className="text-danger">
                              {validationErrors[`${talentIndex}-Bills Rate`]}
                            </p>
                          )}
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
                            onBlur={() =>
                              validateField(
                                "Standard Time BR",
                                talentInputs[talentIndex]?.standardTime,
                                talentIndex
                              )
                            }
                            onFocus={(e) => {
                              e.target.type = "time";
                            }}
                            placeholder="Standard Time BR"
                            className="input-field w-100 px-2 py-2"
                          />
                          {validationErrors[`${talentIndex}-Standard Time BR`] && (
                            <p className="text-danger">
                              {validationErrors[`${talentIndex}-Standard Time BR`]}
                            </p>
                          )}
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
                            onBlur={() =>
                              validateField(
                                "Over Time BR",
                                talentInputs[talentIndex]?.overTime,
                                talentIndex
                              )
                            }
                            onFocus={(e) => {
                              e.target.type = "time";
                            }}
                            placeholder="Over Time BR"
                            className="input-field w-100 px-2 py-2"
                          />
                          {validationErrors[`${talentIndex}-Over Time BR`] && (
                            <p className="text-danger">
                              {validationErrors[`${talentIndex}-Over Time BR`]}
                            </p>
                          )}
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
    </>
  );
}

export default JobSection;
