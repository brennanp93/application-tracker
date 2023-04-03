import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";

import NavBar from "../../components/NavBar/NavBar";
import AddJobForm from "../AddJobForm";
import Columns from "../Columns";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/rejections" />
            <Route path="/addrecord" element={<AddJobForm />} />
<Route path="/joblist" element={<Columns/>}/>
          </Routes>

        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
