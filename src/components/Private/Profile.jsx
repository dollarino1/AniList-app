import React, { useContext } from 'react'
import noAvatar from './../../images/no_avatar.png'
import { Context } from '../../App';
import { useFormik } from 'formik'
import { useState } from 'react';
import firebase from 'firebase'

const Profile = () => {
    const {user} = useContext(Context);
    const [editName, setEditName] = useState(user.displayName)
    const formik = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: (values) => {
            console.log(values)
            user.updateProfile({displayName: values.name})
                .then (() => {
                    setEditName(user.displayName)
                    alert('Update successful!')
                }) 
                .catch(error => {
                    alert(error)
                });
            formik.resetForm(formik.initialValues)
        }
    })
    const [photo, setPhoto] = useState(null)
    const [image, setImage] = useState(null)
    const formikPhoto = useFormik({
        initialValues: {
            file: photo,
        },
        onSubmit: (values) => {
            console.log(photo)
            firebase.storage().ref('users/' + user.uid + '/profile.jpg').put(photo)
            .then(() => {
                alert('Photo uploaded!')
                console.log(user)
                
            })
            .catch((error) => {
                alert(error)
            })
        }
    })
    firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(img => {
        setImage(img)
    })
    return (
        <div className="profile">
            <div className='profile__photo'>
                <img src={image ? image : noAvatar} alt='avatar'></img>
                <form onSubmit={formikPhoto.handleSubmit} className='login__form'>
                    <input type='file' onChange={(e) => setPhoto(e.target.files[0])}></input>
                    <button>Apply</button>
                </form>

            </div>
                

            <div>
                <p><strong>E-mail: </strong> {user.email}</p>
                {user.displayName && <div className='login__form'><p><strong>Name: </strong> {user.displayName}</p> <button onClick={() => setEditName(null)}>Edit</button></div>}

                <form onSubmit={formik.handleSubmit} className='login__form' autoComplete='off'>
                    
                    {editName 
                    ? null
                    : <div><label htmlFor="nameId">Name</label>
                        <input type="text" id='nameId' onChange={formik.handleChange} name='name' value={formik.values.name} />
                        <button>Submit</button>
                    </div>}
                    
                </form>
            </div>
            
            
        </div>
    )
}

export default Profile
