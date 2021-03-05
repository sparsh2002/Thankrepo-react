import React from 'react';
const Avatarlist = (props) => {
    return (
        <div className="avatarstyle ma4 bg-purple dib pa4 tc grow shadow-4">
        <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"></img>
        <h1 className="tc">{props.name}</h1>
        <p className="tc">{props.work}</p>
    </div>
    )
};

export default Avatarlist ;