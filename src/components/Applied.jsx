import { useNavigate } from "react-router-dom";

export default function Applied({
  setStep,
  deleteJob,
  jobList,
  updateStage,
  handleUpdateStage,
}) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Applied");

  return (
    <div className="applied">
      <h1>Applied</h1>
      <>
        {appliedJobs?.map((job, idx) => (
          <div key={job._id} className="step-box">
            <div className="job-info">
              <h2>{job.companyName}</h2>
              <p>{job.jobTitle}</p>
              {/* <p>{new Date(job?.dateApplied).toLocaleDateString()}</p> */}
            </div>
            <a
              className="expand-info"
              href="#"
              onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
            >
              <img
                className="image"
                src="/expand.png"
                alt="View Entire Job"
              />
            </a>
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
            <button
              className="right"
              onClick={() => handleUpdateStage("Phone Screen", job?._id)}
            >
              <img
                className="image"
                src="/right-arrow.png"
                alt="Rejected"
              />
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
