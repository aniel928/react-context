import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Nav = () => {
    const { user } = useContext(UserContext);

    return (
        <nav>
            {
                user ? (
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