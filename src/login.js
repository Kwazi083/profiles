import React, { useState } from 'react';
import { firebaseApp } from './firebase';

export default function Login({ history }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    // src="https://drive.google.com/file/d/1FqVB-0fJk4MUrzXEZRszPy67ul29455u/preview"

    const onSubmit = event => {
    
        firebaseApp.auth().signInWithEmailAndPassword(username, password).then(() => {
            setUserName('')
            setPassword('')
            console.log("User Logged in successfully!")
            history.push('/dashboard')
          }).catch(error => {
            setError({ error });
          });
    
          event.preventDefault();
      }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Please Log In</h1>
        <form>
            <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
            <button style={{marginBottom: 10, marginTop: 5}} onClick={onSubmit} type="submit">Sign In</button><br />
            <a href="/register">Sign Up Here</a>
            </div>
        </form>
        </div>
    )
}
