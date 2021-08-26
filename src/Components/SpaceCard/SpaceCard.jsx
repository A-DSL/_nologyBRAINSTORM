import React from 'react';

//This component will be used to display idea spaces on the homepage.

const SpaceCard = (props) => {

    const ideaSpace = props.ideaSpace;

    return (
        <>
            <div>
                {ideaSpace.name}
            </div>
            <div>
                <button>Delete Space</button>
            </div>
        </>
    )
}

export default SpaceCard;
