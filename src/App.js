import React from "react";
import { useState } from "react";
import ClientDetail from "./components/ClientDetail";
import ReceivedDetail from "./components/ReceivedDetail";
import TalentDetail from "./components/TalentDetail";
import JobSection from "./components/JobSection";

function App() {
  const Data = [
    {
      name: "Collaber - Collabera Inc",
      orderType: "Group PO",
      jobs: [
        {
          title: "Application Development",
          jobId: "ACDF_123",
          talent: ["Monika Goyal", "Shaili Khatri"],
        },
        {
          title: "Business Administration",
          jobId: "MAOE_490",
          talent: ["Krish Joshi"],
        },
      ],
    },
    {
      name: "Aoccaber - Aoccaber Anc",
      orderType: "Individual PO",
      jobs: [
        {
          title: "Marketing Management",
          jobId: "HFBF_873",
          talent: ["Adil Khatri", "Dhruv Rathee", "Adil Kadir"],
        },
        {
          title: "Web Development",
          jobId: "DMIH_346",
          talent: ["Mahir Hala"],
        },
      ],
    },
  ];

  const [jobSections, setJobSections] = useState(1);
  const [selectedClient, setSelectedClient] = useState(Data[0]);
  const [selectedOrderType, setSelectedOrderType] = useState(Data[0].orderType);
  const [resetTrigger, setResetTrigger] = useState(false);
  const [receivedDate, setReceivedDate] = useState("");  

  const handleAddAnotherJobSection = () => {
    setJobSections((prev) => prev + 1);
  };

  const handleClientChange = (clientName) => {
    const client = Data.find((c) => c.name === clientName);
    setSelectedClient(client);
  };

  const handleOrderTypeChange = (orderTypeName) => {
    setSelectedOrderType(orderTypeName);
  };  

  const handleSubmit = (e) => {
    e.preventDefault();    

    const formData = {
      client: selectedClient.name,
      orderType: selectedOrderType,
      receivedOn: receivedDate,
      jobDetails: selectedClient.jobs,
    };

    console.log("Form Submitted with Data: ", formData);    
  };

  const handleReset = () => {
    // Reset states and trigger reset for child components
    setSelectedClient(Data[0]);
    setSelectedOrderType(Data[0].orderType);
    setReceivedDate("");
    setJobSections(1);    
    setResetTrigger((prev) => !prev);
  };

  return (
    <>
      <div className="mt-2">        

        <ClientDetail
          clientData={Data}
          onClientChange={handleClientChange}
          onOrderTypeChange={handleOrderTypeChange}
          resetTrigger={resetTrigger}
        />

        <ReceivedDetail          
          resetTrigger={resetTrigger}
          setReceivedDate={setReceivedDate}
        />

        <TalentDetail
          addAnotherJobSection={handleAddAnotherJobSection}
          isGroupPO={selectedOrderType === "Group PO"}
          resetTrigger={resetTrigger}
        />
        {[...Array(jobSections)].map((item, index) => (
          <JobSection
            key={index}
            jobs={selectedClient ? selectedClient.jobs : []}
            talentNames={
              selectedClient
                ? selectedClient.jobs.map((job) => ({
                    title: job.title,
                    talent: job.talent,
                  }))
                : []
            }
            resetTrigger={resetTrigger}
          />
        ))}
        {/* <div className="row"> */}
        <div className="mt-3 d-flex justify-content-end">
          <button className="btn btn-primary me-2" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-secondary me-2" onClick={handleReset}>
            Reset
          </button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
