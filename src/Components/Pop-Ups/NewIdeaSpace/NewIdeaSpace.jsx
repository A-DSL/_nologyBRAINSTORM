import React from 'react';
import styles from './NewIdeaSpace.module.scss';

const NewIdeaSpace = (props) => {

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <p>Name:</p>
                <input type="text"></input>
                <p>Description:</p>
                <input type="text"></input> 
                <button onClick={props.enableNewISPopUp}>Create</button> 
            </div>    
        </div>
    )
}

export default NewIdeaSpace;
