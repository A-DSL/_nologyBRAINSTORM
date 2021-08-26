import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ISList from '../ISList/ISList';

//Navbar with searchbar to find Ideas
//List of all ideas, each with a delete/pagelink button
//Pop-up for creating new ideas


const ListPage = () => {
    return (
        <section>
            <Navbar />
            <ISList />
        </section>
    )
}

export default ListPage;
