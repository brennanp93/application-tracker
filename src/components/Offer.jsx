export default function Offer({ planningList, setStep, deleteStep }) {
  let column1Data = planningList?.filter((item) => item.step === 2);
  return (
    <div className="column2">
      <h1>Offer3</h1>
      <>
        {column1Data?.map((item, idx) => (
          <div key={item.id} className="step-box">
            <p>{item.content}</p>
            <button onClick={() => setStep(item.id, 1)}>⬅️</button>
            <button onClick={() => setStep(item.id, 3)}>➡️</button>
            <button onClick={() => deleteStep(item.id)}>❌</button>
          </div>
        ))}
      </>
    </div>
  );
}
