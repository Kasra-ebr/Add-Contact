import React from 'react';

const ContactList = ({contacts, onDelete}) => {
    return (
        <section className='contactList'>  
        {
            contacts.map(contact => {
                const {name, email, id } = contact
                return (
                    <div key={c.id} className="item">
                        <p>name : {contact.name}</p>
                        <p> email : {contact.email}</p>
                        <button onClick={()=> onDelete(c.id)}> delete</button>
                    </div>
                )
            })
        }
        </section>
    );
};

export default ContactList;