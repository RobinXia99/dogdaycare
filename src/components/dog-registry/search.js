import React, { useEffect, useState } from "react";
import '../../styles/search.css';

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/fa-icon.css';
import { getDogs } from "../../models/storagemodel";
import { useNavigate } from "react-router-dom";



const Search = () => {

    const [selection, setSelection] = useState('Owner');
    const [input, setInput] = useState('');

    const [dogs, setDogs] = useState([]);



    useEffect(() => {
        setDogs(getDogs);
    }, [])

    useEffect(() => {
        setInput('');
    },[selection])


    function handleSelectChange(event) {
        setSelection(event.target.value);
    }

    return (
        <div>
            <div className="search_header">
            <h2>Registered Owners & Dogs</h2>
            <div className="searchbox_container">
                <select onChange={handleSelectChange}>
                    <option value={'Owner'}>Owner</option>
                    <option value={'Dogs'}>Dogs</option>
                </select>
                <div className="searchbox">
                    <input 
                    type={'text'} 
                    placeholder={(selection == 'Owner') ? 'Search name or phone number...' : 'Search name or chip number...' } 
                    value={input} 
                    onInput={e => setInput(e.target.value)}>
                    </input>
                    <aside> <FontAwesomeIcon className="fa_icon_search" icon={faMagnifyingGlass}/> </aside>
                </div>
            </div>
        </div>
        <SearchResults inputText={input} selectedTag={selection} dogs={dogs}></SearchResults>
        </div>
    )
}

const SearchResults = ({inputText, selectedTag, dogs}) => {

    const [showingDogs, setShowingDogs] = useState(false);

    let navigate = useNavigate();

    const searchResults = dogs.filter((dog) => {
        //if no input the return the original
        if (inputText === '') {
            return dog;
        }
        //return the item which contains the user input
        else {
            switch(selectedTag) {
                case 'Owner':
                    return dog.owner.name.toLowerCase().includes(inputText.toLowerCase()) || dog.owner.phoneNumber.includes(inputText);
                default:
                    return dog.name.toLowerCase().includes(inputText.toLowerCase()) || dog.chipNumber.toLowerCase().includes(inputText.toLowerCase());
            }
        }
    })

    useEffect(() => {

        if(selectedTag == 'Owner') {
            setShowingDogs(false);
        } else {
            setShowingDogs(true);
        }

    },[selectedTag])

    function selectCard (chipNr) {
        navigate('/dogs/' + (chipNr));
    }

    return (
        <div className="search_result_container">
            <header><h2>Results</h2></header>
            {searchResults.map((dog) => (
            <div key={dog.chipNumber} className="result_card" onClick={() => selectCard(dog.chipNumber)}>
                <article>
                    {showingDogs ? 
                    (
                    <span>{dog.name} | {dog.breed} | 
                    <span className={dog.present ? 'present' : 'absent'}> {dog.present ? 'Present':'Absent'}</span>
                    </span>
                    )
                    :
                    (
                    <span>{dog.owner.name} | {dog.owner.lastName} | {dog.owner.phoneNumber}</span>
                    )
                    }
                    
                </article>
                <aside>
                    <span>{dog.chipNumber}</span>
                </aside>
            </div>
            ))}
        </div>
        
    )

}

export default Search;