import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Home = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="bounds">
            <div className="grid-100">
                {
                    user ?
                        <>
                            <h1>Welcome back {user.username}!</h1>
                            <p>Head over to Settings to change up your preferences</p>
                        </>
                        :
                        <>
                            <h1>Welcome to the Main Page</h1>
                            <p>Please Login to Continue</p>
                        </>
                }
            </div>
        </div>
    );
};

export default Home;