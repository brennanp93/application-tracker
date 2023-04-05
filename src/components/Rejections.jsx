import { useNavigate } from "react-router-dom";
export default function Rejections({ jobList, handleUpdateStage }) {
  const navigate = useNavigate();

  let rejectedJobs = jobList?.filter((j) => (j.stage = "Rejected"));

  //  console.log(jobList)
  return (
    <div className="column1">
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
            <button onClick={() => handleUpdateStage("Phone Screen", job?._id)}>
              right arrow
            </button>
            <button
              className="rejected"
              onClick={() => handleUpdateStage("Rejected", job?._id)}
            >
              X
            </button>
          </div>
        ))}
      </>
    </div>
  );
}
