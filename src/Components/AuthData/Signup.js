import React, { useContext, useState } from 'react';
import Formsy, { addValidationRule } from 'formsy-react';
import MyInput from './MyInput';
import './Css/Style.scss';
import google from '../images/icons/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from './Auth';

//form Validation check by warnings START
const errors = {
    isEmail: 'You have to type a valid email',
    maxLength: 'You cannot type more than 25 characters',
    minLength: 'You must type more than 6 characters',
    isAlpha: 'You can only type letters',
    equalsField: 'Password is not match',
    isStrong: 'password is not strong include spacial characters $,% or capital latter'
}
//form Validation check by warnings END

const SignUp = () => {
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
    const { handleGoogleSignIn, facebookRegistration, registerEmailAndPassword, succeed } = auth;
    const location = useLocation();
    const history = useHistory();
    let { from } = location.state || { from: { pathname: "/login" } };

    //form submit to firebase register with email and password
    const submit = (newUserInfo) => {
        if (newUserInfo.email && newUserInfo.password && newUserInfo.fullName) {
            console.log(newUserInfo.email, newUserInfo.password);
            registerEmailAndPassword(newUserInfo.email, newUserInfo.password, newUserInfo.fullName)
                .then(r => {
                    history.replace(from);
                })
        }
    }

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
    return (
        <div className='app'>

            <Formsy className='form' onValidSubmit={submit} onValid={enableButton} onInvalid={disableButton}>
                <h2>Create an Account</h2>
                <MyInput label="" type="text" name="firstName" validations="maxLength:25" placeholder="First Name" required />

                <MyInput label="" type="text" name="lastName" validations="maxLength:25" placeholder="Last Name" required />

                <MyInput label="" type="text" name="fullName" validations="maxLength:25" placeholder="Full Name..." required />

                <MyInput label="" type="text" name="email" validations="maxLength:25,isEmail" validationErrors={errors} placeholder="Email address..." required />

                <MyInput label="" type="password" name="password" validations="minLength:6,isStrong" validationErrors={errors} placeholder="password..." required />

                <MyInput label="" type="password" name="passwordrepeat" validations="equalsField:password" validationErrors={errors} placeholder="password-repeat" required />

                <button type="submit" disabled={!canSubmit} className="">
                    Cerate An Account
                </button>
                <p className="text-center">Alredy have an Account? <Link className="Link" to='/login'>Login</Link></p>

                <br />
                {
                    succeed === true
                        ? <p className="errorSuccess">Your Account Created successfully!</p>
                        :
                        <p className="errorWarning">{succeed}</p>
                }
            </Formsy>
            <div className="other-sign-option">
                <div style={{ color: "#fff" }}>
                    ----------------------------------------or----------------------------------------
                </div>
                <br />
                <div>
                    <button className="login-sign-up-btn" onClick={() => handFacebookSign()}>
                        <span className="float-left pl-3"><img src={google} alt="" /></span>
                        <span className="text-center">Continue with Facebook</span>
                    </button>
                    <button className="login-sign-up-btn" onClick={() => handGoogleSign()}>
                        <span className="float-left pl-3 google-icon"><img src={google} alt="" /></span>
                        <span className="text-center">Continue with Google</span>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SignUp;