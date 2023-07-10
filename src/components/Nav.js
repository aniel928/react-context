import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      {
        props.user ? (
          <>
            <Link to="/settings">Settings</Link>
            <Link to="/signout">Sign Out</Link>
          </>
        ) : (
          <Link className="signin" to="/signin">Sign In</Link>
        )
      }
    </nav>
  );
}

export default Nav;