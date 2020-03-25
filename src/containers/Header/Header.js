import React, { useContext } from 'react';
import AppContext from "../../context/AppContext";

function Header(props) {

    const { filter, setFilter } = useContext(AppContext);
    return (
        <header>
            <input value={filter.toLowerCase()} type="text" onChange={e => setFilter(e.target.value)}/>
        </header>
    );
}

export default Header;