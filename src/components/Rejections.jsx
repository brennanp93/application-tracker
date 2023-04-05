import { useNavigate } from "react-router-dom";
export default function Rejections({ jobList, updateStage }) {
  const navigate = useNavigate();

  let rejectedJobs = jobList?.filter((job) => job.stage === "Rejected");

  console.log(rejectedJobs);
  // console.log(jobList, "joblist");

  function handleUpdateStage(stage, id) {
    let job = jobList.filter((j) => j._id === id)[0];
    job.stage = stage;
    updateStage(job, id);
  }

  return (
    <>
      <h1>Rejected Jobs</h1>
      <div className="rejection-grid-box">
        {/* <div> */}
        <>
          {rejectedJobs?.map((job, idx) => (
            <div key={job._id} className="rejection-step-box">
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
                  className="image"
                  src="/expand.png"
                  alt="View Entire Job"
                />
              </a>
              <button
                className="back-btn"
                onClick={() => handleUpdateStage("Applied", job?._id)}
              >
                <img className="image" src="/return.png" alt="Rejected" />
              </button>
            </div>
          ))}
        </>
        {/* </div> */}
      </div>
    </>
  );
}
