import React from "react";
import CardComponent from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const identifiers = [
        {
          type: "BOL",
          value: "12345",
          primary: true
        },
        {
          type: "ORD",
          value: "8910",
          primary: false
        },
        {
          type: "PRO",
          value: "342",
          primary: true
        },
        {
          type: "BOL",
          value: "0123",
          primary: false
        }
    ];
    const renderContactList = props.contacts.map((contact) => {
        return(
            identifiers.map((identifier) => function(){
                {identifier.primary &&
                    
                    {identifier.type == "BOL" && 
                        <>
                            <span>{identifier.type}</span>
                            <span>{identifier.value}</span>
                        </>
                    }
                    
                }
            })
        );
    })
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default ContactList;