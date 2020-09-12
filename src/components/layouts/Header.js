import React, { useState, useEffect } from 'react'
import '../../assets/styles/header.css'
import Logo from '../../assets/SVGComponents/Logo'
import MiniLogo from '../../assets/SVGComponents/MiniLogo'
import SearchIcon from '../../assets/SVGComponents/SearchIcon'
import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom'

const Header = () => {

  const [isSignIn, setIsSignIn] = useState(false)
  const [userName, setUserName] = useState("Đăng nhập")

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      setIsSignIn(!!user)
      console.log("JAGSKDFG", user)
      setUserName(user == null ? "Đăng nhập" : user.displayName)
      // setUser
    })
  }, [])

  const signOut = () => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
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
                <SearchIcon style={{ width: "1rem" }} />
              </button>
            </div>
          </div>
          <div className="user">
            <i className="fas fa-user" />
            <span className="action-login">
              <p>{userName}</p>
            </span>
            {isSignIn? (
              <ul className="dropdown-user">
                <li>
                  <a href="/users/info">Thông tin cá nhân</a>
                </li>
                <li>
                  <a href="/login" onClick={signOut}>Đăng xuất</a>
                </li>
              </ul>
            ) : (
                <ul className="dropdown-user">
                  <li>
                    <a href="/login">Đăng nhập</a>
                  </li>
                  <li>
                    <a href="/users/signup">Tạo tài khoản</a>
                  </li>
                </ul>
              )}

          </div>
        </div>
      </nav>
    </header>

  )
}

export default Header
