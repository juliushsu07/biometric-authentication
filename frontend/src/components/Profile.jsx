import React from 'react'
import { useCurrentUser } from '../hooks/useCurrentUser'

function Profile() {
  const { isLoading, isAuthorized, username } = useCurrentUser();

  function sendRequest() {
    fetch("/get-user-info")
      .then((res) => res.json())
      .then((data) => console.log(data));
  } 
  
  if (isLoading) return null;

  if(!isAuthorized) {
    return <p>You must <linked to="/">log in</linked> to view this page!</p>;
  }

  return (
    <div>
        <p>You are logged in as <strong>{username}</strong>!</p>
        <button onClick={sendRequest}>Send Request to Backend</button>
    </div>
  )
}

export default Profile