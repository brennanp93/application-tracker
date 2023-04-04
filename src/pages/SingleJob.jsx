import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SingleJob({ jobList }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let oneJob = jobList?.filter((job) => job._id === id)[0];
  const dateStr = oneJob?.dateApplied;
  const date = new Date(dateStr);

  const options = {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      <div>
        <h1>{oneJob?.companyName}</h1>
        <h2>{oneJob?.jobTitle}</h2>
        <h2>{formattedDate}</h2>
        <p>{oneJob?.jobDescription}</p>
        <button onClick={() => navigate('/joblist')}>Go Back</button>
      </div>
    </>
  );
}
