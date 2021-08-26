import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = (props) => {

    const updateSearchFilter = props.updateSearchFilter;

    return (
        <div>
            <Searchbar updateSearchFilter={updateSearchFilter}/>
            <button>Make a new Idea Space</button>
        </div>
    )
}

export default Navbar;
