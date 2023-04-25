import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditJobForm({ jobList, editJobEntry }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const editedJob = jobList?.filter((job) => job._id === id)[0];
  const [updatedJob, setUpdatedJob] = useState(editedJob);

  const dateStr = updatedJob?.dateApplied.slice(0, 10);

  function handleChange(evt) {
    const editedJobData = {
      ...updatedJob,
      [evt.target.name]: evt.target.value,
    };
    setUpdatedJob(editedJobData);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    editJobEntry(updatedJob, id);
  }
  return (
    <>
      <div className="single-job-card">
        <h5>Company Name:</h5>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="companyName"
              value={updatedJob?.companyName}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Company Name"
            />
          </div>
          <h5>Job Title:</h5>
          <div>
            <input
              type="text"
              name="jobTitle"
              value={updatedJob?.jobTitle}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Job Title"
            />
          </div>
          <h5>Date Applied:</h5>
          <div>
            <input
              type="date"
              name="dateApplied"
              value={dateStr}
              // value={updatedJob?.dateApplied}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <h5>Job Description:</h5>
          <div>
            <textarea
              type="text"
              name="jobDescription"
              value={updatedJob?.jobDescription}
              onChange={handleChange}
              required
              autoComplete="off"
              placeholder="Job Description"
              cols={40}
              rows={10}
            />
          </div>
          <button onClick={() => navigate("/")}>Go Back</button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
