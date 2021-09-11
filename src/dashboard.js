import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './context';

export default function Dashboard () {

const {userName, getUserProfile} = useContext(ThemeContext);

useEffect(() => {
    getUserProfile()
  }, []);

  return (
      <div>
        <h2>Dashboard</h2>
        <h2>Hello, {userName}</h2>
        <a href="/profile">My Profile</a>
      </div>
  );
}