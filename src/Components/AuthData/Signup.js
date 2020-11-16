import React, { useContext, useState } from 'react';
import Formsy, { addValidationRule } from 'formsy-react';
import MyInput from './MyInput';
import './Css/Style.scss';
import google from '../images/icons/google.png';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from './Auth';
import { ExtraDataContext } from '../ExtraData/ExtraData';

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
        const { firstName, lastName } = newUserInfo;
        const conCatName = firstName + " " + lastName;
        console.log(conCatName);
        if (newUserInfo.email && newUserInfo.password && conCatName) {
            registerEmailAndPassword(newUserInfo.email, newUserInfo.password, conCatName)
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
    //ExtraData Context 
    const extraData = useContext(ExtraDataContext);
    const { oldUser, setOldUser } = extraData;
    const checkUser = (e) => {
        if (e === false) {
            setOldUser(true);
        }
        if (e === true) {
            setOldUser(false);
        }
    }

    return (
        <Formsy className='form' onValidSubmit={submit} onValid={enableButton} onInvalid={disableButton}>
            <div className="title-login">
                <h3 className="text-dark">Create an account</h3>
            </div>
            <MyInput label="" type="text" name="firstName" validations="maxLength:25" placeholder="First Name" required />
            <MyInput label="" type="text" name="lastName" validations="maxLength:25" placeholder="Last Name" required />
            <MyInput label="" type="text" name="email" validations="maxLength:25,isEmail" validationErrors={errors} placeholder="Username or Email" required />
            <MyInput label="" type="password" name="password" validations="minLength:6,isStrong" validationErrors={errors} placeholder="password" required />
            <MyInput label="" type="password" name="passwordrepeat" validations="equalsField:password" validationErrors={errors} placeholder="Confrim Password" required />
            <button type="submit" disabled={!canSubmit} className={!canSubmit ? "disabled-btn mb-1" : "success-btn mb-1"}>
                Cerate An Account
                </button>
            <p className="text-center">Already have an Account? <span className="Link create-account" onClick={() => checkUser(oldUser)}>Login</span></p>
            <br />
            {
                succeed === true
                    ? <p className="errorSuccess">Your Account Created successfully!</p>
                    :
                    <p className="errorWarning">{succeed}</p>
            }
        </Formsy>
    );
};

export default SignUp;