import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./styles.scss";
const Spinner: React.FC = () => {
  return (
    <div className="spinner">
      <Loader type="Rings" color="#00a6ce" height={100} width={100} />
    </div>
  );
};

export default Spinner;
