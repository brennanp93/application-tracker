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
    <div className="rejections">
      <div>
        <h1>Rejected Jobs</h1>
        <>
          {rejectedJobs?.map((job, idx) => (
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
              <button
                onClick={() => handleUpdateStage("Phone Screen", job?._id)}
              >
                right arrow
              </button>
              <button
                className="rejected"
                onClick={() => handleUpdateStage("Applied", job?._id)}
              >
                Move to Job List
              </button>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}
