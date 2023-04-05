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

  // function handleUpdateStage(stage, id) {
  //   let job = jobList.filter((j) => j._id === id)[0];
  //   job.stage = stage;
  //   updateStage(job, id);
  // }

  return (
    <div className="applied">
      <h1>Applied</h1>
      <>
        {appliedJobs?.map((job, idx) => (
          <div key={job._id} className="step-box">
            <div className="job-info">
              <h2>{job.companyName}</h2>
              <p>{job.jobTitle}</p>
              <p>{new Date(job?.dateApplied).toLocaleDateString()}</p>
              <a
                href="#"
                onClick={() => navigate(`/joblist/${job._id}/singlejob`)}
              >
                View Entire Job
              </a>
            </div>
            <button
              className="left"
              onClick={() => handleUpdateStage("Phone Screen", job?._id)}
            >
              ➡️
            </button>
            <button
              className="rejected"
              onClick={() => handleUpdateStage("Rejected", job?._id)}
            >
              Rejected
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
