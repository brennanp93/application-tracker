import { useNavigate } from "react-router-dom";

export default function Applied({ setStep, deleteJob, jobList }) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Applied");

console.log(appliedJobs)
  return (
    <div className="column1">
      <h1>Applied</h1>
      <>
        {appliedJobs?.map((job, idx) => (
          <a href="#"onClick={()=> navigate(`/joblist/${job._id}/singlejob`)}>
          <div key={job._id} className="step-box">
            <h2>{job.companyName}</h2>
            <p>{job.jobTitle}</p>
            <p>{new Date(job?.dateApplied).toLocaleDateString()}</p>
            {/* <button onClick={() => navigate(`/joblist/${job._id}/singlejob`)}>
              View Entire Submission
            </button> */}
            {/* <button onClick={() => setStep(job._id, 1)}>⬅️</button>
            <button onClick={() => setStep(job._id, 3)}>➡️</button> */}

            {/* <button onClick={() => navigate(`/joblist/${job._id}/edit`)}>
              edit
            </button> */}
          </div>
          </a>
        ))}
      </>
    </div>
  );
}
