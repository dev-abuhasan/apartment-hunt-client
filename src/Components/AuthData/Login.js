import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Css/Style.scss';
import Formsy, { addValidationRule } from 'formsy-react';
import MyInput from './MyInput';
import { useHistory, useLocation } from 'react-router-dom';
import google from '../images/icons/google.png';
import facebookIcon from '../images/logos/Group 2.png'
import { AuthContext } from './Auth';
import Navbars from '../Pages/ShearCompo/Navbars';
import { ExtraDataContext } from '../ExtraData/ExtraData';
import SignUp from './Signup';

//form Validation check by warnings START
const errors = {
    isEmail: 'You have to type a valid email',
    maxLength: 'You cannot type more than 60 characters',
    minLength: 'You must type more than 6 characters',
    isAlpha: 'You can only type letters',
    equalsField: 'Password is not match'
}
//form Validation check by warnings END

const Login = () => {
    const [canSubmit, setCanSubmit] = useState(false);
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

    //ExtraData Context 
    const extraData = useContext(ExtraDataContext);
    const { oldUser, setOldUser } = extraData;
    const checkUser = (e) => {
        if (e === true) {
            setOldUser(false);
        }
        if (e === false) {
            setOldUser(true);
        }
    }

    return (
        <Container id="login">
            <Navbars />
            <br />
            <br />
            <section className="fromSection col-lg-7 col-md-8 mx-auto">
                {oldUser === true ?
                    <Formsy className='form w-100' onValidSubmit={submitLogin} onValid={enableButton} onInvalid={disableButton}>
                        <div className="title-login">
                            <h3 className="text-dark">Login</h3>
                        </div>
                        <MyInput label="" type="text" name="email" validations="maxLength:60,isEmail" validationErrors={errors} placeholder="Username or Email" required />

                        <MyInput label="" type="password" name="password" validations="minLength:6" validationErrors={errors} placeholder="password..." required />

                        <div className="d-flex align-items-center justify-content-between">
                            <div className="">
                                <input type="checkbox" id="login-checkbox" required />
                                <span className="color_000">Remember me</span>
                            </div>
                            <div className="text-dark cursor-pointer forgot-pass color_ggg" onClick={() => changePath()}><p className="">Forgot password</p></div>
                        </div>

                        <br />
                        <button type="submit" disabled={!canSubmit} className={!canSubmit ? "disabled-btn" : "success-btn"}>
                            Login
                    </button>

                        {error
                            ? <p><span className="text-danger w-50">{error}</span></p>
                            : <p></p>
                        }
                        <br />

                        <p className="text-center text-dark"> Don't have an account?
                        <span className="Link create-account ml-1" onClick={() => checkUser(oldUser)}>
                                Create an account
                        </span>
                        </p>
                    </Formsy> : <SignUp />
                }

            </section>
            <div className="other-sign-option col-md-5 mx-auto">
                <div className="text-center">
                    ------------------- or -------------------
                </div>
                <br />
                <div className="">
                    <button className="login-sign-up-btn" onClick={() => handFacebookSign()}>
                        <span className="float-left pl-3 google-icon"><img src={facebookIcon} alt="" /></span>
                        <span className="text-center pt-2 d-block">Continue with Google</span>
                    </button>
                    <button className="login-sign-up-btn" onClick={() => handGoogleSign()}>
                        <span className="float-left pl-3 google-icon"><img src={google} alt="" /></span>
                        <span className="text-center pt-2 d-block">Continue with Google</span>
                    </button>
                </div>
            </div>
        </Container>
    );
};

export default Login;