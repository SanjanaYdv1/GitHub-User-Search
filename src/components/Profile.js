import React from 'react'

function Profile({user}) {
  return (
    <div className='profile-card'>
      <img src={user.avatar_url} alt="Profile" className="profile-avatar" />
      <div className='profile-details'>
        <div className='profile-header'>
          <h2>{user.name || user.login}</h2>
          <p className='username'>@{user.login}</p>
          <p className='profile-date'>Joined{new Date(user.created_at).toLocaleDateString()}</p>
        </div>
        <p className='profile-bio'>{user.bio || "This profile has no bio"}</p>
        <div className='profile-stats'>
          <div><strong>Repos</strong><p>{user.public_repos}</p></div>
          <div><strong>Followers</strong><p>{user.followers}</p></div>
          <div><strong>Following</strong><p>{user.following}</p></div>
        </div>
        <div className='profile-links'>
            <p><strong>Location:</strong>{user.location || "Not Available"}</p>
            <p><strong>Website:</strong><a href={user.blog || "#"} target='_blank' rel='noopener noreferrer'>{user.blog || "Not Available"}</a></p>
            <p><strong>Twitter:</strong>{user.twitter_username || "Not Available"}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile;
