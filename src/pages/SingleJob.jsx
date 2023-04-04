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
          Edit
        </button>
        <button onClick={() => deleteJob(oneJob?._id)}>Delete</button>
        {/* <form onSubmit={updateStage}>
                <select name="" id="">
                  <label>Select Stage</label>
                  <option value="Applied">Applied</option>
                  <option value="Phone Screen">Phone Screen</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
                <button onClick={() => updateStage(idx, oneJob?._id)}>Update</button>
              </form> */}
      </div>
    </>
  );
}

{/* <form onSubmit={updateStage}>
<select name="" id="">
  <label>Select Stage</label>
  <option value="Applied">Applied</option>
  <option value="Phone Screen">Phone Screen</option>
  <option value="Interview">Interview</option>
  <option value="Offer">Offer</option>
  <option value="Rejected">Rejected</option>
</select>
<button onClick={() => updateStage(idx, job?._id)}>Update</button>
</form> */}