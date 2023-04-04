import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import * as jobListAPI from "../../utilities/joblist-api";
import NavBar from "../../components/NavBar/NavBar";
import AddJobForm from "../AddJobForm";
import Columns from "../Columns";
import SingleJob from "../SingleJob";
import EditJobForm from "../EditJobForm";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobList, setJobList] = useState([]);
  const navigate = useNavigate();
console.log(jobList)
  async function addCheckListItem(checkListData) {
    const newCheckListItem = await jobListAPI.create(checkListData);
    setJobList([...jobList, newCheckListItem]);
  }

  async function deleteJob(id) {
    await jobListAPI.deleteJob(id);
    const afterDeleteList = jobList.filter((job) => job._id !== id);
    setJobList(afterDeleteList);
    navigate("/joblist");
  }

  async function editJobEntry(updatedJobListData, id) {
    console.log(updatedJobListData, "HELLO");
    await jobListAPI.editJob(updatedJobListData, id);
    const afterEdit = await jobListAPI.getAll();
    setJobList(afterEdit);
    navigate("/joblist");
  }

  async function updateStage(jobStageData, id) {
    await jobListAPI.updateStage(jobStageData, id);
    const afterUpdateStage = await jobListAPI.getAll();
    setJobList(afterUpdateStage);
  }

  useEffect(
    function () {
      async function getAllItems() {
        if (user) {
          const entireJobList = await jobListAPI.getAll();
          setJobList(entireJobList);
        }
      }
      getAllItems();
    },
    [user]
  );

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/rejections" />
            <Route
              path="/addrecord"
              element={<AddJobForm addCheckListItem={addCheckListItem} />}
            />
            <Route
              path="/joblist"
              element={<Columns jobList={jobList} deleteJob={deleteJob} updateStage={updateStage} />}
            />
            <Route
              path="/joblist/:id/singlejob"
              element={<SingleJob jobList={jobList} deleteJob={deleteJob} />}
            />
            <Route
              path="/joblist/:id/edit"
              element={
                <EditJobForm jobList={jobList} editJobEntry={editJobEntry} />
              }
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
