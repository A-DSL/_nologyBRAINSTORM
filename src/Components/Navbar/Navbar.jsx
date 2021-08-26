import React from 'react';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = (props) => {

    const updateSearchFilter = props.updateSearchFilter;

    return (
        <div>
            <Searchbar updateSearchFilter={updateSearchFilter}/>
        </div>
    )
}

export default Navbar;
