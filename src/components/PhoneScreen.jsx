import { useNavigate } from "react-router-dom";

export default function PhoneScreen({ setStep, deleteJob, jobList, updateStage }) {
  const navigate = useNavigate();
  let appliedJobs = jobList?.filter((job) => job.stage === "Phone Screen");

  function handleUpdateStage(stage, id) {
    let job = jobList.filter((j) => j._id === id)[0];
    job.stage = stage;
    updateStage(job, id);
  }

  return (
    <div className="column1">
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
            <button onClick={() => handleUpdateStage("Interviewing", job?._id)}>
              update stage
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
