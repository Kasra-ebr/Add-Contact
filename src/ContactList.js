import React from 'react';
import "./ContactList.css";
const ContactList = ({contacts, onDelete}) => {
    return (
        <section className='contactList'>  
        {
           contacts && contacts.map(contact => {
                const {name, email, id } = contact
                return (
                    <div key={id} className="item">
                        <p>name : {name}</p>
                        <p> email : {email}</p>
                        <button onClick={()=> onDelete(id)}> delete</button>
                    </div>
                )
            })
        }
        </section>
    );
};

export default ContactList;