import React, { useState } from 'react';
import { firebaseApp } from './firebase';

export default function Register({ history }) {

    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    // const [photoUrl, setPhotoUrl] = useState()
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    // src="https://drive.google.com/file/d/1FqVB-0fJk4MUrzXEZRszPy67ul29455u/preview"

    const onSubmit = event => {
    
        firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(authUser => {
            return firebaseApp.firestore().collection('users').doc(authUser.user.uid).set({
              uid: authUser.user.uid,
              displayName: fullname,
              email: email,
              phoneNumber: phoneNumber,
              photoUrl: "https://www.unisa.ac.za/static/myunisa/Content/News/Images/nkamogeleng_240.jpg"
            });
          }).then(() => {
            setFullname('')
            setPhoneNumber('')
            setEmail('')
            setPassword('')
            console.log("User registered successfully!") 
            history.push('/dashboard')
          }).catch(error => {
            setError({ error });
          });
    
          event.preventDefault();
      }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Please Sign up</h1>
        <form>
            <label>
            <p>Full Name:</p>
            <input type="text" onChange={e => setFullname(e.target.value)} />
            </label>
            <label>
            <p>Email:</p>
            <input type="text" onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
            <p>Phone Number:</p>
            <input type="text" onChange={e => setPhoneNumber(e.target.value)} />
            </label>
            <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
            <button style={{marginBottom: 10, marginTop: 5}} onClick={onSubmit} type="submit">Sign Up</button><br />
            <a href="/login">Sign in Here</a>
            </div>
        </form>
        </div>
    )
}
