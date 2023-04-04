import Applied from "../components/Applied";
import PhoneScreen from "../components/PhoneScreen"
import Interviewing from "../components/Interviewing"
import Offer from "../components/Offer"
export default function Columns({jobList, deleteJob, updateStage}) {


  return (
    <div>
          <Applied jobList={jobList} deleteJob={deleteJob} updateStage={updateStage}/>
          <PhoneScreen jobList={jobList}deleteJob={deleteJob} updateStage={updateStage} />
          <Interviewing jobList={jobList}deleteJob={deleteJob} updateStage={updateStage} />
          <Offer jobList={jobList}deleteJob={deleteJob} updateStage={updateStage} />
    </div>
  )
}