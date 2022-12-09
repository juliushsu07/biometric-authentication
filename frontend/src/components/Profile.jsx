import React from 'react'
import { useCurrentUser } from '../hooks/useCurrentUser'

function Profile() {
  const { isLoading, isAuthorized, username } = useCurrentUser();
  
  if (isLoading) return null;

  if(!isAuthorized) {
    console.log(isAuthorized)
    return <p>You must <linked to="/">log in</linked> to view this page!</p>;
  }

  return (
    <div>
        <p>You are logged in as <strong>{username}</strong>!</p>
    </div>
  )
}

export default Profile