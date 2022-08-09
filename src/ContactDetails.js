import React from 'react';
import Contact from './Contact';
import{Link} from "react-router-dom";

const ContactDetails = (props) => {
    console.log(props.location.state.contact) 
    const {contact} = location.state;
    return (
        <div>
            <p> user name is : {contact.name}</p>
            <p> user email is : {contact.email}</p>
            <Link to="/">
            go to list contact
             </Link>
        </div>
    );
};

export default ContactDetails;