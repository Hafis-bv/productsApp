import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { BeatLoader } from "react-spinners";
import "./loading.scss";

const Loading = () => {
  const { loading } = useFetch();
  if (loading) {
    return (
      <div className="loading">
        <BeatLoader color="#e0c097" margin={2} size={50} />
      </div>
    );
  }
};
export default Loading;
