import React from 'react'
import '../../assets/styles/header.css'
import Logo from '../../assets/SVGComponents/Logo'
import MiniLogo from '../../assets/SVGComponents/MiniLogo'
import SearchIcon from '../../assets/SVGComponents/SearchIcon'

const Header = () => {
    return (
        <header>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-view">
              <span className="menu"><i className="fa fa-bars" /></span>
              <a href="/index.html">
              <Logo />
              <MiniLogo />
              </a>
            </div>
            <div className="navbar-collapse">
              <ul>
                <li className="title-pc">
                  <a href="/product">Máy Tính </a><i className="fa fa-caret-down" />
                  <ul className="dropdown dropdown-header pc">
                    <li>PC theo nhu cầu</li>
                    <li>PC theo giá tiền</li>
                    <li>PC theo thương hiệu</li>
                  </ul>
                </li>
                <li>Laptops <i className="fa fa-caret-down" /></li>
                <li>Linh kiện <i className="fa fa-caret-down" /></li>
                <li>Dành cho bạn</li>
              </ul>
            </div>
            <ul className="action">
              <li><div className="searchbox">
                  <div className="input-field first-wrap">
                    <div className="input-select">
                      <select>
                        <option placeholder="All">Tất cả</option>
                        <option>Máy tính</option>
                        <option>Laptop</option>
                        <option>Linh kiện</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-field second-wrap">
                    <input id="search" type="text" placeholder="Tìm kiếm" />
                  </div>
                  <div className="input-field third-wrap">
                    <button className="btn-search" type="button">
                          <SearchIcon style={{width: '1em'}} />
                    </button>
                  </div>
                </div></li>
              <li className="user">
                <i className="fa fa-user" aria-hidden="true"></i>
                <span className="action-login">
                  <p>Đăng nhập</p>
                  <p>Tài khoản</p>
                </span>
                <ul className="dropdown-header dropdown-user">
                  <li><a href="/#">Đăng nhập</a></li>
                  <li><a href="/#">Tạo tài khoản</a></li>
                  <li className="facebook-login"><a href="/#">Đăng nhập bằng Facebook</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
}

export default Header
