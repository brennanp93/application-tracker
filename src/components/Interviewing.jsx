import { useNavigate } from "react-router-dom";

export default function Interviewing({
  setStep,
  deleteJob,
  jobList,
  updateStage,
  handleUpdateStage,
}) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Interviewing");

  return (
    <div className="interviewing">
      <h1>Interviewing</h1>
      <>
        {appliedJobs?.map((job, idx) => (
          <div key={job._id} className="step-box">
          <div className="job-info">
            <h2>{job.companyName}</h2>
            <p>{job.jobTitle}</p>
            <p>{new Date(job?.dateApplied).toLocaleDateString()}</p>
          </div>
          <a
            className="expand-info"
            href="#"
            onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
          >
            <img
              className="expand-img"
              src="/expand.png"
              alt="View Entire Job"
            />
          </a>
            <button
              className="left"
              onClick={() => handleUpdateStage("Phone Screen", job?._id)}
            >
              <img
                className="rejected-img"
                src="/left-arrow.png"
                alt="Rejected"
              />
            </button>
            <button
              className="right"
              onClick={() => handleUpdateStage("Offer", job?._id)}
            >
              <img
                className="rejected-img"
                src="/right-arrow.png"
                alt="Rejected"
              />
            </button>
            <button
              className="rejected"
              onClick={() => handleUpdateStage("Rejected", job?._id)}
            >
              <img
                className="rejected-img"
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
