import React from 'react'
import '../../assets/styles/footer.css'
import Logo from '../../assets/SVGComponents/Logo'
import MiniLogo from '../../assets/SVGComponents/MiniLogo'
import AppStoreImg from '../../assets/images/appstore.png'
import PlayStoreImg from '../../assets/images/playstore.png'


const Footer = () => {
    return (
        <footer>
            <div className="container" style={{ margin: "30px auto" }}>
                <div className="row">
                    <div className="col-6 col-md-3">
                        <p className="footer-header">Sản phẩm</p>
                        <ul>
                            <li>
                                <a href="/#">Máy tính PC</a>
                            </li>
                            <li>
                                <a href="/#">Laptop</a>
                            </li>
                            <li>
                                <a href="/#">Tai nghe</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="footer-header">Hỗ trợ khách hàng</p>
                        <ul>
                            <li>
                                <a href="/#">Câu hỏi thường gặp</a>
                            </li>
                            <li>
                                <a href="/#">Yêu cầu hỗ trợ</a>
                            </li>
                            <li>
                                <a href="/#">Hướng dẫn đặt hàng</a>
                            </li>
                            <li>
                                <a href="/#">Phương thức vận chuyển</a>
                            </li>
                            <li>
                                <a href="/#">Chính sách đổi trả</a>
                            </li>
                            <li>
                                <a href="/#">Cơ chế tích điểm</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="footer-header">Ưu đãi đặc biệt</p>
                        <ul>
                            <li>
                                <a href="/#">Giá sốc hôm nay</a>
                            </li>
                            <li>
                                <a href="/#">Ưu đãi dành riêng cho hội viên</a>
                            </li>
                            <li>
                                <a href="/#">Đổi điểm</a>
                            </li>
                            <li>
                                <a href="/#">Săn vouncher</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <p className="footer-header">Tải ứng dụng trên điện thoại</p>
                        <ul className="download-app">
                            <li>
                                <a href="/#">
                                    <img src={AppStoreImg} alt="Appstore" />
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <img src={PlayStoreImg} alt="Google play" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row py-4 text-light align-items-center mt-2 mb-2">
                        <div className="col-12 col-md-4 text-center text-lg-left mb-2 mb-lg-0 mx-auto mx-md-0">
                            <a
                                href="/https://twitter.com/"
                                target="_blank"
                                className="d-inline-flex"
                            >
                                <i className="fab fa-twitter mr-4" />
                            </a>
                            <a
                                href="/https://www.facebook.com/"
                                target="_blank"
                                className="d-inline-flex"
                            >
                                <i className="fab fa-facebook mr-4" />
                            </a>
                            <a
                                href="/https://www.instagram.com/"
                                target="_blank"
                                className="d-inline-flex"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                        </div>
                        <div className="col-12 col-md-4 text-center mt-2 mt-lg-0">
                            <a href="/#" target="_blank">
                                <Logo />
                                <MiniLogo />
                            </a>
                        </div>
                        <div className="col-12 col-md-4 text-center text-lg-right mt-3 mt-lg0">
                            <p className="m-0">
                                © 2020 koteX PC Corporation. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer
