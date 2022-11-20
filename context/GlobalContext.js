import { createContext, useState } from 'react';

export const GlobalContext = createContext();

function GlobalProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchRes, setSearchRes] = useState([]);

    const state = {
        loggedIn,
        setLoggedIn,
        searchRes,
        setSearchRes,
        searchInput,
        setSearchInput,
    };

    return (
        <GlobalContext.Provider value={{ state }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
