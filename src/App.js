
import './App.css';
import {useEffect, useState} from "react";
import AddContact from "./Add Contact/AddContact.js";
import ContactList from "./ContactList";
import "./App.css"
import{Link, Route, Switch} from "react-router-dom";

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

  useEffect(()=>{
  localStorage.setItem("contacts", JSON.stringify(contacts) )
   },[contacts]);

  useEffect(()=>{
   const savedContacts = JSON.parse(localStorage.getItem("contacts"))
    if (savedContacts) setContacts(savedContacts);
  },[]);
  // install JSON 
  
 /// *
  useEffect(()=> {
    const fetchContacts = async () => {
      const {data} = await axios.get("hhtps");
      setContacts(data)

    }
  })
 
   
  return (
    <main>
      <h1> Contact App </h1>
      <Switch>
      
  
        <Route 
           path="./user:id" 
           exact render = {(props)=> (
           < ContactList  onDelete={deleteHandler} 
           {...props}/>)}/>

<Route 
          path="./add"
           render = {(props)=>  (
          < AddContact addContactHandler={addContactHandler} 
          {...props} />)}
          /> 
      

      </Switch>
    // 
    </main>
  );
}

export default App;


// < AddContact addContactHandler={addContactHandler}/>
      //<ContactList  onDelete={deleteHandler}/>
// (props) ==== in order to see history as an prosp
// render === be ja ineke bera elemnt o hey dorost konam miam hey update esh mikonam (145) **
// props componnet vs props render // performance dige nemiad elkemt ro cereat kone miad update mikone
///*

