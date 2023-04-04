import { useNavigate } from "react-router-dom";

export default function Applied({ setStep, deleteJob, jobList }) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Applied");
  return (
    <div className="column1">
      <h1>Applied</h1>
      <>
        {appliedJobs?.map((job, idx) => (
          <div key={job._id} className="step-box">
            <h2>{job.companyName}</h2>
            <p>{job.jobTitle}</p>
            <p>{job.dateApplied}</p>
            <button onClick={() => navigate(`/joblist/${job._id}/singlejob`)}>
              View Entire Submission
            </button>
            {/* <button onClick={() => setStep(job._id, 1)}>⬅️</button>
            <button onClick={() => setStep(job._id, 3)}>➡️</button>
            <button onClick={() => deleteJob(job._id)}>❌</button> */}
            <button onClick={() => navigate(`/joblist/${job._id}/edit`)}>
              edit
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
