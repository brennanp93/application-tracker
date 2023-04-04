import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddJobForm({ addCheckListItem, setPlanningList }) {
  const [newJob, newNewJob] = useState({
    companyName: "",
    jobTitle: "",
    jobDescription: "",
    dateApplied: "",
    stage: "Applied",
  });

  function handleSubmit(e) {
    e.preventDefault();
    addCheckListItem(newJob);
    newNewJob({
      companyName: "",
      jobTitle: "",
      jobDescription: "",
      dateApplied: "",
      stage: "Applied",
    });
  }

  function handleChange(evt) {
    const formFields = { ...newJob, [evt.target.name]: evt.target.value };
    newNewJob(formFields);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          value={newJob.companyName}
          onChange={handleChange}
          required
          autoComplete="off"
          placeholder="Company Name"
        />
        <input
          type="text"
          name="jobTitle"
          value={newJob.jobTitle}
          onChange={handleChange}
          required
          autoComplete="off"
          placeholder="Job Title"
        />
        <textarea
          type="text"
          name="jobDescription"
          value={newJob.jobDescription}
          onChange={handleChange}
          required
          autoComplete="off"
          placeholder="Job Description"
        />
        <input
          type="date"
          name="dateApplied"
          value={newJob.dateApplied}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <button type="submit">
          <img src="./add-new.png" alt="" />
          Submit
        </button>
      </form>
    </div>
  );
}
