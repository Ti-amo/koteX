import React from 'react'

const Watched = () => {
    return (
        <section className="col-lg-9 col-md-12 notification">
            <h2 className="heading">Sản phẩm yêu thích</h2>
            <div className="container notification">
                <a href="/#">
                    <div className="noti-item">
                        <img
                            src="https://picsum.photos/200"
                            alt="noti"
                            className="noti-image"
                        />
                        <div className="content">
                            Ổ Cứng Di Động 2.5 inch Seagate Backup Plus Slim Portable Drive 2TB
                            GOLD
                        </div>
                        <div className="wrapper">
                            <div className="true-price">1.000.000 đ</div>
                            <div className="price">1.990.000 đ</div>
                        </div>
                    </div>
                </a>
                <a href="/#">
                    <div className="noti-item">
                        <img
                            src="https://picsum.photos/200"
                            alt="noti-item"
                            className="noti-image"
                        />
                        <div className="content">
                            Ổ Cứng Di Động 2.5 inch Seagate Backup Plus Slim Portable Drive 2TB
                            GOLD
                        </div>
                        <div className="wrapper">
                            <div className="true-price">1.000.000 đ</div>
                            <div className="price">1.990.000 đ</div>
                        </div>
                    </div>
                </a>
            </div>
        </section>

    )
}

export default Watched
