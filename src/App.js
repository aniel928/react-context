import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from './context/UserContext';

// App Components
import Header from "./components/Header";
import Home from "./components/Home";
import UserSignIn from "./components/UserSignIn";
import UserSignOut from "./components/UserSignOut";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

function App() {
    const [user, setUser] = useState(null);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [accentColor, setAccentColor] = useState('#63537d');
    const [fontPercentage, setFontPercentage] = useState(100);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        document.body.style.fontSize = `${fontPercentage}%`;
    }, [isDarkMode, fontPercentage]);

    const signInUser = (username, password) => {
        const newUser = {
            username,
            password
        };
        setUser(newUser);
    }

    const signOutUser = () => {
        setUser(null);
    }

    const toggleDarkMode = () => {
        setIsDarkMode(currentMode => !currentMode);
    }

    return (
        <UserContext.Provider value={{
            user,
            actions: {
                signIn: signInUser,
                signOut: signOutUser,
            }
        }}>
            <div>
                <Header
                    accentColor={accentColor} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="signin" element={
                        <UserSignIn accentColor={accentColor} />
                    } />
                    <Route path="signout" element={<UserSignOut />} />
                    <Route path="settings" element={
                        <Settings
                            isDarkMode={isDarkMode}
                            toggleDarkMode={toggleDarkMode}
                            accentColor={accentColor}
                            updateAccentColor={setAccentColor}
                            fontPercentage={fontPercentage}
                            updateFontPercentage={setFontPercentage} />
                    } />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </UserContext.Provider>
    );
}

export default App;
