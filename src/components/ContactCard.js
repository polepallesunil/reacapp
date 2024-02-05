import React from "react";

const CardContact = (props) => {
    const {name, email} = props.contact;
    
    return(
        <div className="item">
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alterbate outline icon" style={{color:"red", marginTop:"10px"}}></i>
        </div>
    )
}

export default CardContact;