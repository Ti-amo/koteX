import React from 'react'
import '../../assets/styles/header.css'
import Logo from '../../assets/SVGComponents/Logo'
import MiniLogo from '../../assets/SVGComponents/MiniLogo'
import SearchIcon from '../../assets/SVGComponents/SearchIcon'

const Header = () => {
    return (
      <header>
      <nav className="navbar">
        <div className="navbar-container container-fluid">
          <div className="navbar-view">
            <span className="menu">
              <i className="far fa-bars" />
            </span>
            <a href="/">
              <Logo />
              <MiniLogo />
            </a>
          </div>
          <div className="searchbox">
            <div className="input-field first-wrap">
              <div className="input-select">
                <select>
                  <option>Tất cả</option>
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
                <SearchIcon style={{width: "1rem"}} />
              </button>
            </div>
          </div>
          <div className="user">
            <i className="fas fa-user" />
            <span className="action-login">
              <p>Đăng nhập</p>
            </span>
            <ul className="dropdown-user">
              <li>
                <a href="/users/login">Đăng nhập</a>
              </li>
              <li>
                <a href="/users/signup">Tạo tài khoản</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    
    )
}

export default Header
