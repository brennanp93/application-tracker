import { useNavigate } from "react-router-dom";

export default function Interviewing({ jobList, handleUpdateStage }) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Interviewing");

  return (
    <div className="interviewing">
      <h1>Interviewing</h1>
      <>
        {appliedJobs?.map((job) => (
          <div key={job._id} className="step-box">
            <div className="job-info">
              <button
                className="job-info-btn"
                onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
              >
                <h2>{job.companyName}</h2>
                <p>{job.jobTitle}</p>
              </button>
            </div>
            <button
              className="expand-info"
              href="#"
              onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
            >
              <img className="image" src="/expand.png" alt="View Entire Job" />
            </button>
            <button
              className="left"
              onClick={() => handleUpdateStage("Phone Screen", job?._id)}
            >
              <img className="image" src="/left-arrow.png" alt="Rejected" />
            </button>
            <button
              className="right"
              onClick={() => handleUpdateStage("Offer", job?._id)}
            >
              <img className="image" src="/right-arrow.png" alt="Rejected" />
            </button>
            <button
              className="rejected"
              onClick={() => handleUpdateStage("Rejected", job?._id)}
            >
              <img className="image" src="/rejected-red.png" alt="Rejected" />
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
