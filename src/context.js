import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from "@material-ui/core/styles";
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { firebaseApp } from './firebase';

const ThemeContext = createContext()
 
function MyThemeProvider({ children }) {

  const [darkState, setDarkState] = useState(false);
  const [color, setColor] = useState('lightBlue');
  const db = firebase.firestore();

  // states
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [users, setUsers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [permissions, setPermissions] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectedPermissionsIndex, setSelectedPermissionsIndex] = useState(null);
  const [entities, setEntities] = useState([]);
  const [selectedEntities, setSelectedEntities] = useState([]);
  const [selectedEntityIndex, setSelectedEntityIndex] = useState(null);
  const [results, setResults] = useState([]);
  const [appColor, setAppColor] = useState([]);
  const [appTheme, setAppTheme] = useState([]);
  const [roles, setRoles] = useState([]);
  const [permissionz, setPermissionz] = useState([]);
  //const [loggedInUser, setLoggedInUser] = useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const [userType, setUserType] = useState('Admin')
  const [selectedEntityValues, setSelectedEntityValues] = useState([]);
  const [userFullDetails, setUserFullDetails] = useState({})
  //const [results, setResults] = useState([]);
  let perms = [];
  let ent = [];

  const [loggedInUser, setLoggedInUser] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPhoto, setUserPhoto] = useState('');

  // get logged in user id


  // function for listItems
//   const getUsers = async() => {
//     let temp = [];
//     const response = db.collection('users');
//     const data = await response.get();
//     data.docs.map(item => {
//       temp.push(item.data())
//     })
//     setUsers(temp)
//   }

//   const getPermissions = async() => {
//     let temp = [];
//     const response = db.collection('settings').doc('adminMicroservices');
//     const data = await response.get();
//     data.data().adminClaims.map(item => {
//       temp.push(item)
//     })
//     setPermissions(temp)
//   }

//   const getEntities = async() => {
//     let temp = [];
//     const response = db.collection('entities');
//     const data = await response.get();
//     data.docs.map(item => {
//       temp.push(item.data())
//     })
//     setEntities(temp)
//   }

//   const selectedUserPermissions = (userID) => {
//     db.collection('users').doc(userID).get().then((data) => {
//       perms = data.data().settings.permissions
      
//     }).then(() => {
//       setSelectedPermissions(perms);
//     })
//   }

//   const selectedUserEntities = (userID) => {
//     db.collection('users').doc(userID).get().then((data) => {
//       ent = data.data().settings.linkedEntities
      
//     }).then(() => {
//       setSelectedEntities(ent);
//     })
//   }

  // get user global settings
  const getUserProfile = async () => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        let user = firebaseApp.auth().currentUser;

        if (user !== null) {
          let res = user.uid
          firebaseApp.firestore().collection('users').doc(res).get().then((data) => {
            let res = data.data()
            setResults(res);
            console.log("Results: ", res)
            setLoggedInUser(res.uid)
            setUserName(res.displayName)
            setUserEmail(res.email)
            setUserPhoneNumber(res.phoneNumber)
            setUserPhoto(res.photoUrl)
          })
        } else {
          console.log('No user signed in')
        }
      }
    })
  }

  // get logged in user entities
//   const getLoggedInUserEntities = () => {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         let user_id = firebase.auth().currentUser.uid;
//         console.log("Admin logged in user: ", user_id)

//         db.collection("users").doc(user_id).get().then(data => {
//           ent = data.data().settings.linkedEntities
//         }).then(() => {
//           setSelectedEntities(ent);
//         })
//       }
//     })
//   }
 
  return (
    <ThemeContext.Provider value={{ getUserProfile, 
        userName, userEmail, userPhoneNumber, userPhoto, 
        setUserName, setUserEmail, setUserPhoneNumber, setUserPhoto, loggedInUser}}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
 
export { MyThemeProvider, ThemeContext }
