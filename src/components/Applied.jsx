export default function Applied({ planningList, setStep, deleteStep, jobList }) {
  let appliedJobs = jobList?.filter((item) => item.stage === "Applied");
  return (
    <div className="column1">
      <h1>Applied</h1>
      <>
        {appliedJobs?.map((item, idx) => (
          <div key={item._id} className="step-box">
            <h2>{item.companyName}</h2>
            <p>{item.jobTitle}</p>
            <p>{item.dateApplied}</p>
            <button onClick={() => setStep(item.id, 1)}>⬅️</button>
            <button onClick={() => setStep(item.id, 3)}>➡️</button>
            <button onClick={() => deleteStep(item.id)}>❌</button>
          </div>
        ))}
      </>
    </div>
  );
}
