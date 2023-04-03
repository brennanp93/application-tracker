import Applied from "../components/Applied";
import Interviewing from "../components/Interviewing"
import Offer from "../components/Offer"
export default function Columns({jobList, deleteJob}) {


  return (
    <div>
          <Applied jobList={jobList} deleteJob={deleteJob}/>
          <Interviewing jobList={jobList} />
          <Offer jobList={jobList} />
    </div>
  )
}