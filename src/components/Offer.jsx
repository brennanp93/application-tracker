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

  // function handleUpdateStage(stage, id) {
  //   let job = jobList.filter((j) => j._id === id)[0];
  //   job.stage = stage;
  //   updateStage(job, id);
  // }

  return (
    <div className="offer">
      <h1>Offer</h1>
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
            <button
              className="left"
              onClick={() => handleUpdateStage("Interviewing", job?._id)}
            >
              ⬅️
            </button>
            <button
              className="rejected"
              onClick={() => handleUpdateStage("Rejected", job?._id)}
            >
              rejected
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
