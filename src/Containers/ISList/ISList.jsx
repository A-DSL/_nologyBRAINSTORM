import { useState, useEffect } from 'react';
import SpaceCard from '../../Components/SpaceCard/SpaceCard';

const ISList = (props) => {

    const ideaSpaces = props.ideaSpaces;
    const [ISList, setISList] = useState([]);

    useEffect(() => {
        setISList(ideaSpaces.map( (IS) => {
            return <SpaceCard ideaSpace={IS}/>
        }))
    }, [ideaSpaces])

    return (
        <div>
            {ISList}
        </div>
    )
}

export default ISList;
