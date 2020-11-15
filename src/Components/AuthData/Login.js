import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Css/Style.scss';
import Formsy, { addValidationRule } from 'formsy-react';
import MyInput from './MyInput';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../images/icons/google.png';
import logo from '../images/icons/google.png';
import { AuthContext } from './Auth';
import Navbars from '../Pages/ShearCompo/Navbars';

//form Validation check by warnings START
const errors = {
    isEmail: 'You have to type a valid email',
    maxLength: 'You cannot type more than 25 characters',
    minLength: 'You must type more than 6 characters',
    isAlpha: 'You can only type letters',
    equalsField: 'Password is not match'
}
//form Validation check by warnings END

const Login = () => {
    const [canSubmit, setCanSubmit] = useState(false)
    addValidationRule('isStrong', function (values, value) {
        return ['$', '%'].some(v => value && value.indexOf(v) !== -1)
    })
    const disableButton = () => {
        setCanSubmit(false)
    }
    const enableButton = () => {
        setCanSubmit(true)
    }

    //Handle Firebase Auth
    //get user login form auth.js file
    const auth = useContext(AuthContext);
    const { handleGoogleSignIn, facebookRegistration, loginInUserEmailAndPass, error } = auth;

    //redirect to path settings
    const location = useLocation();
    const history = useHistory()
    let { from } = location.state || { from: { pathname: "/" } };

    //google sign in 
    const handGoogleSign = () => {
        handleGoogleSignIn()
            .then(r => {
                history.replace(from);
            })
    }

    //facebook sign in
    const handFacebookSign = () => {
        facebookRegistration()
            .then(r => {
                history.replace(from);
            })
    }
    //login a user with email and pass
    const submitLogin = (e) => {
        if (e.email && e.password) {
            loginInUserEmailAndPass(e.email, e.password)
                .then(r => history.replace(from))
        }
        //e.preventDefault();
    }
    const changePath = () => {
        const url = `/reset-password`;
        history.push(url);
    }

    return (
        <Container id="login">
            <Navbars />
            <br />
            <br />
            <section>
                <div className="title-login">
                    <h3>Login</h3>
                </div>
                <Formsy className='form' onValidSubmit={submitLogin} onValid={enableButton} onInvalid={disableButton}>
                    <h2 className="text-dark">Login</h2>

                    <MyInput label="" type="text" name="email" validations="maxLength:25,isEmail" validationErrors={errors} placeholder="Email address..." required />

                    <MyInput label="" type="password" name="password" validations="minLength:6" validationErrors={errors} placeholder="password..." required />

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <input type="checkbox" id="login-checkbox" /><span className="text-danger">Remember me</span>
                        </div>
                        <p className="text-dark cursor-pointer" onClick={() => changePath()}>Forgot your password</p>
                    </div>

                    <br />
                    <button type="submit" disabled={!canSubmit} className="">
                        Log-In
                </button>

                    {error
                        ? <p><span className="text-danger w-50">{error}</span></p>
                        : <p></p>
                    }
                    <br />

                    <p className="text-center text-dark">Created A Account?
                    <Link className="Link" to='/sign-up'>
                            Sign-Up
                    </Link>
                    </p>
                </Formsy>
                <div className="other-sign-option">
                    <div style={{ color: "#fff" }}>
                        ----------------------------------------or----------------------------------------
                </div>
                    <br />
                    <div>
                        <button className="login-sign-up-btn" onClick={() => handFacebookSign()}>
                            <span className="float-left pl-3 google-icon"><img src={google} alt="" /></span>
                            <span className="text-center">Continue with Google</span>
                        </button>
                        <button className="login-sign-up-btn" onClick={() => handGoogleSign()}>
                            <span className="float-left pl-3 google-icon"><img src={google} alt="" /></span>
                            <span className="text-center">Continue with Google</span>
                        </button>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Login;