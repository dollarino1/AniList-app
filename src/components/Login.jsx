import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { FRONTPAGE_ROUTE, SIGNUP_ROUTE } from '../utils/consts';
import firebase from 'firebase'
import { Context } from '../App';

const Login = () => {
    const { setHasLogged, setPending } = useContext(Context)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
            firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                .then (() => {
                    setHasLogged(true)
                }) 
                .catch(error => alert(error));
            formik.resetForm(formik.initialValues)
            setPending(true)
        }
    })
    return (
            <div className='login__wrapper'>
                <form onSubmit={formik.handleSubmit} className='login__form'>
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
