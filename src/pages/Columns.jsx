import Applied from "../components/Applied";
import Interviewing from "../components/Interviewing"
import Offer from "../components/Offer"
export default function Columns({jobList}) {


  return (
    <div>
          <Applied jobList={jobList}/>
          <Interviewing jobList={jobList} />
          <Offer jobList={jobList} />
    </div>
  )
}