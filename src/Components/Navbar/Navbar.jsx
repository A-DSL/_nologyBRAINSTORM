import React, {useState, useEffect} from 'react';
import Searchbar from '../Searchbar/Searchbar';
import NewIdeaSpace from '../Pop-Ups/NewIdeaSpace/NewIdeaSpace';

const Navbar = (props) => {

    //prop search filter
    const updateSearchFilter = props.updateSearchFilter;

    //new idea space popup
    const [modal, setModal] = useState(false);
    const enableNewISPopUp = (e) => {
        e.preventDefault();
        setModal(!modal);
    }

    return (
        <div>
            <Searchbar updateSearchFilter={updateSearchFilter}/>
            <button onClick={enableNewISPopUp}>Make a new Idea Space</button>
            {modal && <NewIdeaSpace enableNewISPopUp={enableNewISPopUp} />}
        </div>
    )
}

export default Navbar;
