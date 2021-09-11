import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './context';

const Profile = ({history}) => {

    const {userName, userEmail, userPhoto, userPhoneNumber, getUserProfile} = useContext(ThemeContext);

    useEffect(() => {
        getUserProfile()
    }, []);

    return (
        <div>
            <div style={{
                display:"block",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                margin:"18px 0px"
            }}>
                <div>
                    <img style={{width:"160px", height:"160px", borderRadius:"80px"}}
                    // src= "https://www.unisa.ac.za/static/myunisa/Content/News/Images/nkamogeleng_240.jpg"
                    src = {userPhoto}
                    alt = "profile_pic"/>
                </div>
                <div>
                    <h4>{userName}</h4>
                    <div>
                        <h5>Email Adress</h5>
                        <h6>{userEmail}</h6>
                        <h5>Phone Number</h5>
                        <h6>{userPhoneNumber}</h6>
                        <button onClick= {()=> history.push("/editProfile")} >Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile