import React from 'react'
import AvatarImg from '../../assets/images/avatar.jpg'

const AsideUserLayout = () => {
    return (
        <aside className="menu-left col-lg-3">
            <div className="account">
                <img className="avatar" src={AvatarImg} alt="pict" />
                <div>
                    <p>Tài khoản của</p>
                    <p>User</p>
                </div>
            </div>
            <ul>
                <li>
                    <a href="/users/info">
                        <i className="fas fa-user" />
                        <span>Thông tin tài khoản</span>
                    </a>
                </li>
                <li className="menu-left-active">
                    <a href="/users/noti">
                        <i className="fas fa-bell" />
                        <span>Thông báo của tôi</span>
                    </a>
                </li>
                <li>
                    <a href="/users/favorites">
                        <i className="fas fa-heart" />
                        <span>Sản phẩm yêu thích</span>
                    </a>
                </li>
                <li>
                    <a href="/users/watched">
                        <i className="fas fa-eye" />
                        <span>Sản phẩm đã xem</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default AsideUserLayout
