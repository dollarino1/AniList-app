import { useFormik } from 'formik'
import React, { useContext, useState }  from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { LOGIN_ROUTE, FRONTPAGE_ROUTE } from '../../utils/consts'
import firebase from 'firebase';
import { Context } from '../../App';

const Signup = () => {
    const db = firebase.firestore();

    const { setUser, setPending } = useContext(Context)
    const [error, setError] = useState('');
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
            firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                .then (cred => {
                    return db.collection('users').doc(cred.user.uid).set({
                        email: values.email
                    });
                })
                .then ((cred) => {
                    setUser(cred.user)
                    setPending(true)
                })
                .catch(error => {
                    console.log(error.message);
                    setError(error.message)
                });
                formik.resetForm(formik.initialValues)
            
        }
    })

    return (
        <div className='signup__wrapper'>
            <form onSubmit={formik.handleSubmit} className='signup__form'>
                <label htmlFor="SignupForm">Email</label>
                <input type="email" name="email" id="SignupForm" 
                    onChange={formik.handleChange} value={formik.values.email}/>
                <label htmlFor="PasswordForm">Password</label>
                <input type="password" name="password"value={formik.values.password} id="PasswordForm"
                    onChange={formik.handleChange}/>
                    {error ? <span className='error'>{error}</span> : null}
                <NavLink className='signup__redirect' to={LOGIN_ROUTE}>Already have an account?</NavLink>
                <button>Sign Up</button>
                <NavLink className='signup__redirectback' to={FRONTPAGE_ROUTE}>Go back</NavLink>
            </form>
        </div>
        
    )
}

export default Signup
