import React, { useState } from "react";

function PurchaseOrderType({ clientData, onOrderTypeChange }) {
  const [selectedOrderType, setSelectedOrderType] = useState(
    clientData[0]?.orderType || ""
  );

  const handleOrderTypeChnged = (e) => {
    const newOrderType = e.target.value;
    setSelectedOrderType(newOrderType);
    onOrderTypeChange(newOrderType);
  };

  return (
    <div>
      <h5>
        Purchase Order Type <span className="asterisk">*</span>
      </h5>
      <select
        value={selectedOrderType}
        className="client-dropdown w-100 px-1 py-2"
        onChange={handleOrderTypeChnged}
      >
        {clientData.map((clientDataItem, clientDataIndex) => (
          <option key={clientDataIndex} value={clientDataItem.orderType}>
            {clientDataItem.orderType}
          </option>
        ))}
      </select>      
    </div>
  );
}

export default PurchaseOrderType;
