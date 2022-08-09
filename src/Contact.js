import React from 'react';
import{Link} from "react-router-dom";
const Contact = ({contact , onDelete}) => {
    const {name, email, id } = contact;

    return (
        <div key={id} className="item">
            <div >
             
                <Link to={{pathname:`user/${id}`, state : {contact : contact}}}>
                       <div className='user'>
                        <p>name : {name}</p>
                        <p> email : {email}</p>
                        </div>
                </Link>
       
        </div>
        <button onClick={()=> onDelete(id)}> delete</button>
          </div>
    );
};

export default Contact;

// //  <img src={userImage} alt="user"/>