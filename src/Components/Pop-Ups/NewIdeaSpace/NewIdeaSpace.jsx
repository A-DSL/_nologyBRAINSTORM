import React from 'react';
import styles from './NewIdeaSpace.module.scss';

const NewIdeaSpace = (props) => {

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>Name:</p>
                <input type="text" onChange={props.updateNewISName}></input>
                <p>Description:</p>
                <textarea rows="8" cols="50" onChange={props.updateNewISDesc}></textarea> 
                <button onClick={props.createNewIS}>Create</button> 
            </div>    
        </div>
    )
}

export default NewIdeaSpace;
