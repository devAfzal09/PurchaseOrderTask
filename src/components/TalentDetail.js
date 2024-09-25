import React from "react";
import "./style/styling.css";

function TalentDetail({ addAnotherJobSection, isGroupPO }) {
  return (
    <>
      <div className="container-fluid talent-detail">
        <div className="row">
          <div className="col d-flex align-items-center justify-content-between">
            <h5 className="fw-bold">Talent Details</h5>
            {isGroupPO && ( // Render button only if isGroupPO is true
              <button
                onClick={addAnotherJobSection}
                className="rounded-pill px-2 py-2 fw-bold border-1"
              >
                + Add Another
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TalentDetail;
