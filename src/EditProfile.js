import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './context';
import { getAuth, updateProfile, updateEmail, updatePhoneNumber } from "firebase/auth";
import { firebaseApp } from './firebase';

const EditProfile = () => {

    const {loggedInUser, userName, userEmail, userPhoneNumber, getUserProfile, setUserName, setUserEmail, setUserPhoneNumber} = useContext(ThemeContext);
    const [success, setSuccess] = useState('')

    useEffect(() => {
        getUserProfile()
    }, []);

    const onSubmit = async (event) => {
        const auth = getAuth();
        console.log("Auth: ", auth.currentUser)
        updateProfile(auth.currentUser, {
            displayName: userName, photoURL: "https://www.unisa.ac.za/static/myunisa/Content/News/Images/nkamogeleng_240.jpg"
          }).then(() => {
            firebaseApp.firestore().collection('users').doc(loggedInUser)
            .update({displayName: userName, phoneNumber: userPhoneNumber});
            console.log("Profile Updated")
            setUserName('')
            setUserPhoneNumber('')
            setSuccess("User Profile Update!")

          }).catch((error) => {
            console.log(error)
          });

          updateEmail(auth.currentUser, userEmail).then(() => {
            firebaseApp.firestore().collection('users').doc(loggedInUser)
            .update({email: userEmail});
            setUserEmail('')
            setSuccess("User Profile Update!")
            console.log("Email Updated")
          }).catch((error) => {
           console.log(error)
          });
    
        event.preventDefault();
      }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Update Your Profile</h1>
        <form>
            <label>
            <p>Full Name:</p>
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
            <p>Email:</p>
            <input type="text" value={userEmail} onChange={e => setUserEmail(e.target.value)} />
            </label>
            <label>
            <p>Phone Number:</p>
            <input type="text" value={userPhoneNumber} onChange={e => setUserPhoneNumber(e.target.value)} />
            </label>
            <div>
            <button style={{marginBottom: 10, marginTop: 5}} onClick={onSubmit} type="submit">Update Profile</button><br />
            <span style={{color: "green"}}>{success}</span><br />
            <a href="/profile">Back to profile</a>
            </div>
        </form>
        </div>

        // <div>
        //     <input value = "Name"/>
        //     <input value = "Email Adress"/>
        //     <input value = "Phone Number"/>
        //     <button> Update Profile </button>
        // </div>
    )
}

export default EditProfile