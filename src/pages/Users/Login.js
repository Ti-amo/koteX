import React, { useState, useEffect } from 'react'
import '../../assets/styles/login.css'
import app from '../../components/auth/base'
import * as firebase from 'firebase'
import Home from '../Home'
import { Redirect } from 'react-router-dom'

const Login = ({ props }) => {

    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday')
    provider.addScope('user_age_range')
    provider.addScope('user_gender')


    const [isSignIn, setIsSignIn] = useState(false)
    const [user, setUser] = useState()

    useEffect(() => {

        firebase.auth().onAuthStateChanged(user => {
            setIsSignIn(!!user)
            console.log("USER", user)
            // 
        })
    }, [])

    const signIn = () => {
        console.log("HERE");
        firebase.auth().signInWithPopup(provider).then(function (result) {

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result;
            localStorage.setItem("token", token)
            localStorage.setItem("isSignedIn", "true")
            localStorage.setItem("user", result)
            // console.log("USER", result)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }


    return (
        <React.Fragment>
            {isSignIn ? (<Redirect to="/" />) : (
                <main>
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className="login-wrapper">
                            <div className="header-wrapper">
                                <div className="header">
                                    <div>Đăng nhập</div>
                                </div>
                            </div>
                            <div className="form-wrapper">
                                <div className="input">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                                            autoComplete="on"
                                            name="loginKey"
                                            maxLength={128}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="input">
                                        <input
                                            type="password"
                                            placeholder="Mật khẩu"
                                            autoComplete="current-password"
                                            name="password"
                                            maxLength={16}
                                        />
                                    </div>
                                </div>
                                <div className="forget-wrapper login-button">
                                    <button>Đăng nhập</button>
                                    <a className="forget" href="/users/login/reset">
                                        Quên mật khẩu
                            </a>
                                </div>
                                <div>
                                    <div className="line">
                                        <div className="line-side" />
                                        <span className="content">HOẶC</span>
                                        <div className="line-side" />
                                    </div>

                                </div>
                                <div className="other-login-wrapper">
                                    <button className="button-wrap facebook border" style={{border: "none"}} onClick={signIn}>
                                        <i className=" icon fab fa-facebook" />
                                        <span>Facebook</span>
                                    </button>
                                    <button className="button-wrap google" style={{border: "none"}}>
                                        <i className=" icon fab fa-google" />
                                        <span>Google</span>
                                    </button>
                                </div>
                            </div>
                            <div className="signup-wrapper">
                                <div className="container">
                                    <span>Bạn mới biết đến koteX?</span>
                                    <a href="users/signup">Đăng ký</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </main>
            )}
        </React.Fragment>
    )
}

export default Login
