import React from 'react';
import {useState, } from "react";
import "../Add Contact/AddContact.css";  
    const AddContact = ({addContactHandler, history}) => {
   const [contact, setContact] = useState({ name: "", email: ""});
   
   

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
        
    }
 
   const submitForm = (e) => {
    if (!contact.name || contact.email) {
        alert("all fields are mandatory")
        return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({name:"", email:""})
    //push to homepage  {History } use as a props
    history.push("./")
   }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div className='formControl'>
                    
                    <input
                            type="text"
                            name="name"
                            value={contact.name}
                            onChange={changeHandler}/>
                </div>
                <div  className='formControl'> 
                <label> email</label>
                <input
                            type="text"
                            name="email"
                            value={contact.email}
                            onChange={changeHandler}/>
                </div>
              <button type="submit"> Add Contact</button>
            </form>
        </div>
    );
};

export default AddContact;