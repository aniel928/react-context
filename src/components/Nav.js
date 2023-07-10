import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Nav = () => {
    return (
        <UserContext.Consumer>
            {context => {
                return (
                    <nav>
                        {
                            context.user ? (
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
            }}
        </UserContext.Consumer>

    );
}

export default Nav;