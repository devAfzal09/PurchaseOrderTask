import React, { useEffect, useState } from "react";
import "./style/styling.css";
import PurchaseOrderNo from "./PurchaseOrderNo";
import ReceivedDate from "./ReceivedDate";
import PurchaseOrderType from "./PurchaseOrderType";

function ClientDetail({
  clientData,
  onClientChange,
  onOrderTypeChange,
  resetTrigger,
}) {
  const [selectedClient, setSelectedClient] = useState(
    clientData[0]?.name || ""
  );

  useEffect(() => {
    if (resetTrigger) {
      setSelectedClient(clientData[0]?.name || "");      
      onClientChange(clientData[0]?.name || "");      
    }
  }, [resetTrigger, clientData, onClientChange, onOrderTypeChange]);

  const handleClientChange = (event) => {
    const newClient = event.target.value;
    setSelectedClient(newClient);
    onClientChange(newClient);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <h5>
              Client Name <span className="asterisk">*</span>
            </h5>
            <select
              value={selectedClient}
              className="client-dropdown w-100 px-1 py-2"
              onChange={handleClientChange}
            >
              {clientData.map((clientDataItem, clientDataIndex) => (
                <option key={clientDataIndex} value={clientDataItem.name}>
                  {clientDataItem.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <PurchaseOrderType
              clientData={clientData}
              onOrderTypeChange={onOrderTypeChange}
            />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <PurchaseOrderNo resetTrigger={resetTrigger} />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <ReceivedDate resetTrigger={resetTrigger} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientDetail;
