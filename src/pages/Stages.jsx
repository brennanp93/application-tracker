import Applied from "../components/Applied";
import PhoneScreen from "../components/PhoneScreen";
import Interviewing from "../components/Interviewing";
import Offer from "../components/Offer";
export default function Stages({ jobList, deleteJob, updateStage }) {
  function handleUpdateStage(stage, id) {
    let job = jobList.filter((j) => j._id === id)[0];
    job.stage = stage;
    updateStage(job, id);
  }

  return (
    <div>
      <Applied
        jobList={jobList}
        deleteJob={deleteJob}
        updateStage={updateStage}
        handleUpdateStage={handleUpdateStage}
      />
      <PhoneScreen
        jobList={jobList}
        deleteJob={deleteJob}
        updateStage={updateStage}
        handleUpdateStage={handleUpdateStage}
      />
      <Interviewing
        jobList={jobList}
        deleteJob={deleteJob}
        updateStage={updateStage}
        handleUpdateStage={handleUpdateStage}
      />
      <Offer
        jobList={jobList}
        deleteJob={deleteJob}
        updateStage={updateStage}
        handleUpdateStage={handleUpdateStage}
      />
    </div>
  );
}
