import React from 'react';
import {useState} from "react";

const addContact = () => {
    const [contacts, setContatcs] = useState({
        name:"",
        email:"",
    })

    const changeHandler = (e) => {
        setContatcs({...contacts, [e.target.name : e.target.value]})
        console.log(e,target.value)
    }


    return (
        <div>
            <form onSubmit={addContactHandler}>
                <div>
                    <label> Name</label>
                    <input
                            type=""
                            name="name"
                            value={contacts.name}
                            onChange={changeHandler}/>
                </div>
                <div> email</div>
                <input
                            type=""
                            name="email"
                            value={contacts.email}
                            onChange={changeHandler}/>

            </form>
        </div>
    );
};

export default addContact;