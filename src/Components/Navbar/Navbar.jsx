import React, {useState, useEffect} from 'react';
import Searchbar from '../Searchbar/Searchbar';
import NewIdeaSpace from '../Pop-Ups/NewIdeaSpace/NewIdeaSpace';

const Navbar = (props) => {

    //prop search filter
    const updateSearchFilter = props.updateSearchFilter;

    //states monitoring modal newIS items
    const [newISName, setNewISName] = useState('');
    const [newISDesc, setNewISDesc] = useState('');
    const updateNewISName = (e) => {
        setNewISName(e.target.value);
    }
    const updateNewISDesc = (e) => {
        setNewISDesc(e.target.value);
    }
    
    //new idea space popup
    const [modal, setModal] = useState(false);
    const updateNewISPopUp = (e) => {
        e.preventDefault();
        setModal(!modal);
        //reset states upon losing pop-up
        setNewISName('');
        setNewISDesc('');
    }

    //keep state up-to-date
    useEffect(() => {
        console.log(newISName);
        console.log(newISDesc);
    }, [newISName, newISDesc])

    //run fetch request, re-retrieve space ideas to auto update list, close modal
    const createNewIS = (e) => {
        return fetch("http://localhost:8080/ideas/create", {
            method: 'POST',
            crossDomain: true,
            headers: {
              'Content-Type': 'nology-brainstorm/json',
              'API-Key': 'secret'
            },
            body: JSON.stringify({
                spaceid: 5,
                name: 'newISName',
                description: 'newISDesc'
            })
        }).then((nothing) => {
            updateNewISPopUp(e);
        })
    }

    return (
        <div>
            <Searchbar updateSearchFilter={updateSearchFilter}/>
            <button onClick={updateNewISPopUp}>Make a new Idea Space</button>
            {modal && <NewIdeaSpace updateNewISPopUp={updateNewISPopUp} updateNewISName={updateNewISName} updateNewISDesc={updateNewISDesc} createNewIS={createNewIS}/>}
        </div>
    )
}

export default Navbar;
