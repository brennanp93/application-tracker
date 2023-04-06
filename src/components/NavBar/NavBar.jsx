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
        <div className="title-links">
          <h1>Application Tracker</h1>
          <nav>
            <Link to="/">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/rejections">Rejections</Link>
            &nbsp; | &nbsp;
            <Link to="/addrecord">Add Job</Link>
            &nbsp;&nbsp;
          </nav>
        </div>
        <div className="log-out">
          <span>Welcome, {user.name}</span>
          &nbsp;&nbsp;
          <Link to="" onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
      </header>
    </>
  );
}
