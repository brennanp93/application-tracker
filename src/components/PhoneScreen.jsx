import { useNavigate } from "react-router-dom";

export default function PhoneScreen({ setStep, deleteJob, jobList, updateStage, handleUpdateStage }) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Phone Screen");


  return (
    <div className="phone-screen">
      <h1>Phone Screen</h1>
      <>
        {appliedJobs?.map((job, idx) => (
          <div key={job._id} className="step-box">
            <h2>{job.companyName}</h2>
            <p>{job.jobTitle}</p>
            <p>{new Date(job?.dateApplied).toLocaleDateString()}</p>
            <a
              href="#"
              onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
            >
              View Entire Job
            </a>
            <button className="left" onClick={() => handleUpdateStage("Applied", job?._id)}>
            ⬅️
            </button>
            <button
            className="right" onClick={() => handleUpdateStage("Interviewing", job?._id)}>
            ➡️
            </button>
            <button className="rejected" onClick={() => handleUpdateStage("Rejected", job?._id)}>
             Rejected
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
