import React from 'react';


function Item(props) {
    const name = props.name;
    const adrees = props.adrees
    return (
        <div className="item">
            {name} -{adrees}
        </div>
    );
}

export default Item;
