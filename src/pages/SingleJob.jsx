import { useParams, useNavigate } from "react-router-dom";
// import { useState } from "react";

export default function SingleJob({ jobList, deleteJob }) {
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
      <div className="single-job-card">
        <h1>{oneJob?.companyName}</h1>
        <h2>{oneJob?.jobTitle}</h2>
        <h2>{formattedDate}</h2>
        <p>{oneJob?.jobDescription}</p>
        <button onClick={() => navigate("/joblist")}>Go Back</button>
        <button onClick={() => navigate(`/joblist/${oneJob?._id}/edit`)}>
          Edit Job
        </button>
        <button onClick={() => deleteJob(oneJob?._id)}>❌</button>
      </div>
    </>
  );
}
