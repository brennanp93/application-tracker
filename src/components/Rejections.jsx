import { useNavigate } from "react-router-dom";
export default function Rejections({ jobList, updateStage }) {
  const navigate = useNavigate();

  let rejectedJobs = jobList?.filter((job) => job.stage === "Rejected");

  function handleUpdateStage(stage, id) {
    let job = jobList.filter((j) => j._id === id)[0];
    job.stage = stage;
    updateStage(job, id);
  }

  return (
    <>
      <div className="rejection-grid-box">
        <h2>Rejected Jobs</h2>
        <>
          {rejectedJobs?.map((job) => (
            <div key={job._id} className="rejection-step-box">
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
                onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
              >
                <img
                  className="image"
                  src="/expand.png"
                  alt="View Entire Job"
                />
              </button>
              <button
                className="back-btn"
                onClick={() => handleUpdateStage("Applied", job?._id)}
              >
                <img className="image" src="/return.png" alt="Back Button" />
              </button>
            </div>
          ))}
        </>
      </div>
    </>
  );
}
