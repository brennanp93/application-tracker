import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <header>
        <h1>Application Tracker</h1>
        <nav>
          <Link to="/joblist">Joblist</Link>
          &nbsp; | &nbsp;
          <Link to="/rejections">Rejections</Link>
          &nbsp; | &nbsp;
          <Link to="/addrecord">Add Job</Link>
          &nbsp;&nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </nav>
      </header>
    </>
  );
}
