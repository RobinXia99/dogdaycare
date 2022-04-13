import React, { useState } from "react";
import '../../styles/search.css';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/fa-icon.css';

const SearchHeader = () => {

    const [selection, setSelection] = useState('Owner');

    function handleSelectChange(event) {
        setSelection(event.target.value);
    }

    return (
        <div className="search_header">
            <h2>Registered Owners & Dogs</h2>
            <div className="searchbox_container">
                <select onChange={handleSelectChange}>
                    <option value={'Owner'}>Owner</option>
                    <option value={'Dogs'}>Dogs</option>
                </select>
                <div className="searchbox">
                    <input type={'text'} placeholder={'Search name or phone number...'}></input>
                    <aside> <FontAwesomeIcon className="fa_icon_search" icon={faMagnifyingGlass}/> </aside>
                </div>
            </div>
        </div>
    )
}

export default SearchHeader;