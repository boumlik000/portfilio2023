import React from "react";
import "./loading.css";
import {FaSadTear} from "react-icons/fa"

const PageLoading = () => {
  return (
    <div className="loading-container">
     <div className="loading-text">
        <span>Slow </span>
        <span>Conexion</span>
        <span> <FaSadTear /> </span>
     </div>
    </div>
  );
};

export default PageLoading;