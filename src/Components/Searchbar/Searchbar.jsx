import React from 'react';



const Searchbar = (props) => {

    const updateSearchFilter = props.updateSearchFilter;

    return (
        <div>
            <span>Search:</span>
            <input type="text" onChange={updateSearchFilter}></input>
        </div>
    )
}

export default Searchbar;
