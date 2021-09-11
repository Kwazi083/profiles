import React, { useState } from 'react'
// import Users from './usersList';

const Form = () => {
    const [input, setInput] = useState("");
    const [users, setUsers] = useState([]);

    const inputHandler = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setUsers([
            ...users,
            {Image: inputHandler, text:inputHandler, id: Math.random()*1000},
        ]);
    };

    return(
        <form>
            <input onChange={inputHandler} type = {Image} className = "profile-pic"  />
            <input onChange={inputHandler} type = "text" className = "name" />
            <input onChange={inputHandler} type = "text" className = "email" />
            <input onChange={inputHandler} type = "text" className = "phone" />
            <input onChange={inputHandler} type = "text" className = "business" />
            <button onClick={submitHandler} type = "submit" className = "Submit-Profile" >Edit Profile</button>
        </form>
    )
}

export default Form;