import "./style/styling.css";
import PoDate from "./PoDate";
import Budget from "./Budget";
import ReceivedCurrency from "./ReceivedCurrency";
import ReceivedEmail from "./ReceivedEmail";
import ReceivedName from "./ReceivedName";

function ReceivedDetail({ resetTrigger }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <ReceivedName resetTrigger={resetTrigger} />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <ReceivedEmail resetTrigger={resetTrigger}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <PoDate resetTrigger={resetTrigger}/>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 d-flex mb-3">
            <Budget resetTrigger={resetTrigger} />
            <ReceivedCurrency />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceivedDetail;
