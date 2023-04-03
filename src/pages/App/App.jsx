import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";

import NavBar from "../../components/NavBar/NavBar";
import Offer from "../../components/Offer";
import Applied from "../../components/Applied";
import Interviewing from "../../components/Interviewing";

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
            <Route path="/addrecord" />
          </Routes>
          <Applied />
          <Interviewing />
          <Offer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
