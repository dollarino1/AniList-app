import React, { useContext } from 'react'
import noAvatar from './../../images/no_avatar.png'
import { Context } from '../../App';

const Profile = () => {
    const {user} = useContext(Context);
    console.log(user)
    return (
        <div className="profile">
            <img src={user.photoURL ? user.photoURL : noAvatar} alt='avatar' />
            <h3>{user.email}</h3>
        </div>
    )
}

export default Profile
