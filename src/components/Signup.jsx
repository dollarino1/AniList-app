import { useFormik } from 'formik'
import React, { useContext }  from 'react'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, FRONTPAGE_ROUTE, MAINPAGE_ROUTE } from '../utils/consts'
import firebase from 'firebase'
import { Context } from '../App';

const Signup = () => {
    const { setHasLogged } = useContext(Context)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log(values)
            firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                .then (() => {
                    setHasLogged(true)
                })
                .catch(error => alert(error));
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
                <NavLink className='signup__redirect' to={LOGIN_ROUTE}>Already have an account?</NavLink>
                <button>Sign Up</button>
                <NavLink className='signup__redirectback' to={FRONTPAGE_ROUTE}>Go back</NavLink>
            </form>
        </div>
    )
}

export default Signup
