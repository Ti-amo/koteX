import React from 'react'
import FBImage from '../../assets/images/facebook.png'
import '../../assets/styles/info.css'

const Info = () => {
    return (
        <section className="col-lg-9 col-md-12">
            <div className="container">
                <h2 className="heading">Thông tin tài khoản</h2>
                <form>
                    <div className="form-child">
                        <label>Họ tên</label>
                        <div className="right-form">
                            <input type="text" name="name" />
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Số điện thoại</label>
                        <div className="right-form">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Hãy nhập SĐT để trải nghiệm tốt hơn"
                            />
                            <button type="button" className="sendOTP">
                                Gửi mã xác thực
                            </button>
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Mã xác thực</label>
                        <div className="right-form">
                            <input
                                type="text"
                                name="otp"
                                placeholder="Nhập mã xác thực gửi tới số điện thoại trên"
                            />
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Email</label>
                        <div className="right-form">
                            <input type="text" name="email" />
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Giới tính</label>
                        <div className="right-form">
                            <label>
                                <input type="radio" name="gender" defaultValue="male" />
                                <label htmlFor="male">Nam</label>
                            </label>
                            <label>
                                <input type="radio" name="gender" defaultValue="female" />
                                <label htmlFor="female">Nữ</label>
                            </label>
                            <label>
                                <input type="radio" name="gender" defaultValue="other" />
                                <label htmlFor="other">Khác</label>
                            </label>
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Ngày sinh</label>
                        <div className="right-form">
                            <select name="day" className="day">
                                <option value="{0}">Ngày</option>
                            </select>
                            <select name="month" className="month">
                                <option value="{0}">Tháng</option>
                            </select>
                            <select name="year" className="year">
                                <option value="{0}">Năm</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Mật khẩu cũ</label>
                        <div className="right-form">
                            <input
                                type="password"
                                name="oldPassword"
                                placeholder="Nhập mật khẩu cũ"
                            />
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Mật khẩu mới</label>
                        <div className="right-form">
                            <input
                                type="password"
                                name="password"
                                placeholder="Mật khẩu từ 6 đến 32 ký tự"
                            />
                        </div>
                    </div>
                    <div className="form-child">
                        <label>Nhập lại mật khẩu</label>
                        <div className="right-form">
                            <input
                                type="password"
                                name="passwordConfirm"
                                placeholder="Nhập lại mật khẩu mới"
                            />
                        </div>
                    </div>
                    <div className="form-child">
                        <button type="submit">Cập nhật</button>
                    </div>
                </form>
                <h2 className="social-header">Liên kết tài khoản mạng xã hội</h2>
                <div className="social">
                    <div className="social-item">
                        <span>
                            <img src={FBImage} alt="facebook" /> Facebook
                        </span>
                        <span className="connect">
                            <a href="/#">Liên kết</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Info
