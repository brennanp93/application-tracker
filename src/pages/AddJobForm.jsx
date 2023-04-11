import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddJobForm({ addCheckListItem }) {
  const navigate = useNavigate();
  const [newJob, setNewJob] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    dateApplied: "",
    stage: "Applied",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addCheckListItem(newJob);
    setNewJob({
      companyName: "",
      jobTitle: "",
      jobDescription: "",
      dateApplied: "",
      stage: "Applied",
    });
    navigate("/");
  }

  function handleChange(evt) {
    const formFields = { ...newJob, [evt.target.name]: evt.target.value };
    setNewJob(formFields);
  }

  return (
    <div className="single-job-card">
      <h5>Company Name:</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="companyName"
            value={newJob.companyName}
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
            value={newJob.jobTitle}
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
            value={newJob.dateApplied}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <h5>Job Description:</h5>
        <div>
          <textarea
            type="text"
            name="jobDescription"
            value={newJob.jobDescription}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Job Description"
            required
            cols={40}
            rows={10}
          />
        </div>
        <button type="submit">
          <img src="./add-new.png" alt="" />
          Submit
        </button>
      </form>
    </div>
  );
}
