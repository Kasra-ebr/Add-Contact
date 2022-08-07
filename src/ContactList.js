import React from 'react';

const ContactList = ({contacts, onDelete}) => {
    return (
        <>  
        {
            contacts.map(contact => {
                const {name, email, id } = contact
                return (
                    <div key={c.id}>
                        <p>name : {contact.name}</p>
                        <p> email : {contact.email}</p>
                        <button onClick={()=> onDelete(c.id)}> delete</button>
                    </div>
                )
            })
        }
        </>
    );
};

export default ContactList;