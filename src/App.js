import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Profile from './components/Profile';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [darkMode, setDarkMode] = useState(true);

    const fetchUser = async (username) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUser(response.data);
            setError(null);
        } catch (err) {
            setUser(null);
            setError("User not found");
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Fetch default user profile on mount
    useEffect(() => {
        fetchUser("octocat");  
    }, []);

    return (
        <div className={`app ${darkMode ? "dark-mode" : "light-mode"}`}>
            <header>
                <h1>devfinder</h1>
                <button className="mode-switch" onClick={toggleDarkMode}>
                    {darkMode ? "LIGHT" : "DARK"} <span className="mode-icon">☀️</span>
                </button>
            </header>
            <SearchBar onSearch={fetchUser} />
            {error && <p className="error">{error}</p>}
            {user && <Profile user={user} />}
        </div>
    );
}

export default App;
