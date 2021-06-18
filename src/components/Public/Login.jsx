import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FRONTPAGE_ROUTE, SIGNUP_ROUTE } from '../../utils/consts';
import firebase from 'firebase'
import { Context } from '../../App';

const Login = () => {
    const { setUser, setPending } = useContext(Context)
    const [error, setError] = useState('');
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
            firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                .then (() => {
                    setUser(true)
                    setPending(true)
                }) 
                .catch(error => {
                    setError(error.message)
                });
            formik.resetForm(formik.initialValues)
        }
    })
    return (
            <div className='login__wrapper'>
                <form onSubmit={formik.handleSubmit} className='login__form'>
                {error ? <span className='error'>{error}</span> : null}
                    <label htmlFor="LoginForm">Email</label>
                    <input type="text" id='LoginForm' onChange={formik.handleChange} name='email' value={formik.values.email} />

                    <label htmlFor="PasswordForm">Password</label>
                    <input type="password" id='PasswordForm' onChange={formik.handleChange} name='password' value={formik.values.password} />

                    <NavLink className='login__redirect' to={SIGNUP_ROUTE}>No account? Sign Up</NavLink>
                    <button>Login</button>
                    <NavLink className='login__redirectback' to={FRONTPAGE_ROUTE}>Go back</NavLink>
                </form>
            </div>    
    )
}

export default Login
