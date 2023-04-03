import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import * as jobListAPI from "../../utilities/joblist-api";
import NavBar from "../../components/NavBar/NavBar";
import AddJobForm from "../AddJobForm";
import Columns from "../Columns";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [jobList, setJobList] = useState([]);
  async function addCheckListItem(checkListData) {
    const newCheckListItem = await jobListAPI.create(checkListData);
    setJobList([...jobList, newCheckListItem]);
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
            <Route path="/joblist" element={<Columns jobList={jobList} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
