import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { BeatLoader } from "react-spinners";
import "./style.scss";

const Loading = () => {
  return (
    <div className="loading">
      <BeatLoader color="#e0c097" margin={2} size={30} />
    </div>
  );
};
export default Loading;
