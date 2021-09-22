import { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ISList from '../ISList/ISList';
import styles from './ListPage.module.scss';
//Navbar with searchbar to find Ideas
//List of all ideas, each with a delete/pagelink button
//Pop-up for creating new ideas

const ListPage = (props) => {

    const ideaSpaces = props.ideaSpaces;

    const [searchFilter, setSearchFilter] = useState([]);
    const updateSearchFilter = (e) => {
        setSearchFilter(ideaSpaces.filter( (IS) => 
            (IS.name).includes(e.target.value) ||
            (IS.name.toLowerCase()).includes(e.target.value)
        ))
    }

    useEffect(() => {
        setSearchFilter(ideaSpaces);
    }, [ideaSpaces])

    return (
        <section className={styles.listPage}>
            <Navbar updateSearchFilter={updateSearchFilter}/>
            <ISList ideaSpaces={searchFilter}/>
        </section>
    )
}

export default ListPage;
