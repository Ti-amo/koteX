import React from 'react'
import '../../assets/styles/login.css'

const Login = () => {
    return (
        <main>
            <form>
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
                                    defaultValue
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
                                    defaultValue
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
                            <div className="other-login-wrapper">
                                <a className="button-wrap facebook" href="/#">
                                    <i className=" icon fab fa-facebook" />
                                    <span>Facebook</span>
                                </a>
                                <a className="button-wrap google" href="/#">
                                    <i className=" icon fab fa-google" />
                                    <span>Google</span>
                                </a>
                            </div>
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

    )
}

export default Login
