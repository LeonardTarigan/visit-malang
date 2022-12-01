import { createContext, useState } from 'react';

export const GlobalContext = createContext();

function GlobalProvider(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchRes, setSearchRes] = useState([]);
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [villaInput, setvillaInput] = useState({
        location: '',
        date: '',
        duration: 1,
        qty: 1,
    });
    const [wisataInput, setWisataInput] = useState({
        location: '',
        date: '',
        qty: 1,
    });

    const state = {
        loggedIn,
        setLoggedIn,
        searchRes,
        setSearchRes,
        searchInput,
        setSearchInput,
        villaInput,
        setvillaInput,
        wisataInput,
        setWisataInput,
        openSideMenu,
        setOpenSideMenu,
    };

    return (
        <GlobalContext.Provider value={{ state }}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
