import React from "react";
import "../styles/progressBar.css"


const ProgressBar = ({ title,value,count }) => {
  return (
    <>
    <div className="progressbar_div p-3">
      <div className="row mb-1">
      <h3 className="col-10 p-0 m-0  d-flex align-items-center">{title}</h3>
      <span className="col-2 d-flex align-items-center counts">{count}</span>
      </div>
      <div className="progress_bar row ">
        <div className="progress-bar-inner" style={{ width: `${value}%` }} />
      </div>
    </div>
    
    </>
  );
};

export default ProgressBar;