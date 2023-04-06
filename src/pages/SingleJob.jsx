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
        <h5>Company Name:</h5>
        <div id="company-name">
          <h1>{oneJob?.companyName}</h1>
        </div>
        <h5>Job Title:</h5>
        <div id="job-title">
          <h2>{oneJob?.jobTitle}</h2>
        </div>
        <h5>Date Applied:</h5>
        <div id="date-applied">
          <h2>{formattedDate}</h2>
        </div>
        <h5>Job Description:</h5>
        <div className="job-description-box">
          <p>{oneJob?.jobDescription}</p>
        </div>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(`/joblist/${oneJob?._id}/edit`)}>
          Edit
        </button>
        <button onClick={() => deleteJob(oneJob?._id)}>Delete</button>
      </div>
    </>
  );
}
