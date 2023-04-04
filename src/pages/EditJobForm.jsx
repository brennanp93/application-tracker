import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditJobForm({ jobList, editJobEntry }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const editedJob = jobList?.filter((job) => job._id === id)[0];
  const [updatedJob, setUpdatedJob] = useState(editedJob);
  console.log(updatedJob);

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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            value={updatedJob?.companyName}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="Company Name"
          />
          <input
            type="text"
            name="jobTitle"
            value={updatedJob?.jobTitle}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="Job Title"
          />
          <textarea
            type="text"
            name="jobDescription"
            value={updatedJob?.jobDescription}
            onChange={handleChange}
            required
            autoComplete="off"
            placeholder="Job Description"
          />
          <input
            type="date"
            name="dateApplied"
            value={updatedJob?.dateApplied}
            onChange={handleChange}
            required
            autoComplete="off"
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
