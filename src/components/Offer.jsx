import { useNavigate } from "react-router-dom";

export default function Interviewing({
  setStep,
  deleteJob,
  jobList,
  updateStage,
  handleUpdateStage,
}) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Offer");

  return (
    <div className="offer">
      <h1>Offer</h1>
      <>
        {appliedJobs?.map((job, idx) => (
          <div key={job._id} className="step-box">
          <div className="job-info">
            <h2>{job.companyName}</h2>
            <p>{job.jobTitle}</p>
            {/* <p>{new Date(job?.dateApplied).toLocaleDateString()}</p> */}
          </div>
          <button
            className="expand-info"
            href="#"
            onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
          >
            <img
              className="image"
              src="/expand.png"
              alt="View Entire Job"
            />
          </button>
            <button
              className="left"
              onClick={() => handleUpdateStage("Interviewing", job?._id)}
            >
              <img
              className="image"
                src="/left-arrow.png"
                alt="Rejected"
              />
            </button>
            <button
              className="rejected"
              onClick={() => handleUpdateStage("Rejected", job?._id)}
            >
              <img
              className="image"
                src="/rejected-red.png"
                alt="Rejected"
              />
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
