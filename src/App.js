
import './App.css';
import {useState} from "react";
import AddContact from "./Add Contact/AddContact.js";
import ContactList from "./ContactList";
import "./App.css"

function App() {
  const [contacts, setContacts] = useState([]);


  const addContactHandler = (e, contact) => {
    e.preventDefault();
    // console.log("clicked")
    const newAdd = {
      id : Math.Random() * 100,
      name: contact.name,
      email: contact.email
    }
    setContacts({...contacts}, newAdd);
}

const deleteHandler = (id) => {
   const filteredContact = contacts.filter( c => c.id !== id);
   setContacts(filteredContact);
}
  return (
    <div >
      <h1> Contact App </h1>
      < AddContact addContactHandler={addContactHandler}/>
      <ContactList  onDelete={deleteHandler}/>
    </div>
  );
}

export default App;
