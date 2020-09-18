import React from 'react'

import '../../assets/styles/modal.scss'
import '../../assets/styles/signup2.css'
import LaptopImg from '../../assets/images/laptop.png'

const index = ({ setShowModal }) => {

    return (
        <div className="modal">
            <a href="#close" className="close" onClick={() => setShowModal(false)}>&times;</a>
            <section className="container">
                <h2>Lựa chọn sản phẩm bạn quan tâm</h2>
                <section className="product-slide interested">
                    <h3>Loại sản phẩm bạn đang quan tâm là gì?</h3>
                    <div className="container-fluid">
                        <article className="card">
                            <a href="#" className="type-link">
                                <i className="icon fal fa-laptop"></i>
                                <div className="card-body">
                                    <span>Laptop</span>
                                </div>
                            </a>
                        </article>
                        <article className="card">
                            <a href="#" className="type-link">
                                <i className="icon fal fa-desktop"></i>
                                <div className="card-body">
                                    <span>PC</span>
                                </div>
                            </a>
                        </article>
                        <article className="card">
                            <a href="#" className="type-link">
                                <i className="icon fal fa-headphones"></i>
                                <div className="card-body">
                                    <span>Linh kiện</span>
                                </div>
                            </a>
                        </article>
                    </div>
                </section>
                <section className="product-slide interested">
                    <h3>Khoảng giá phù hợp với bạn</h3>
                    <div className="container-fluid">
                        <article className="card">
                            <a href="#" className="price-link">
                                <span className="icon">&lt; 10</span>
                                <div className="card-body">
                                    <span>Dưới 10 triệu</span>
                                </div>
                            </a>
                        </article>
                        <article className="card">
                            <a href="#" className="price-link">
                                <span className="icon">10 - 20</span>
                                <div className="card-body">
                                    <span>10 triệu - 20 triệu</span>
                                </div>
                            </a>
                        </article>
                        <article className="card">
                            <a href="#" className="price-link">
                                <span className="icon">20 - 30</span>
                                <div className="card-body">
                                    <span>20 triệu - 30 triệu</span>
                                </div>
                            </a>
                        </article>
                        <article className="card">
                            <a href="#" className="price-link">
                                <span className="icon">30 - 40</span>
                                <div className="card-body">
                                    <span>30 triệu - 40 triệu</span>
                                </div>
                            </a>
                        </article>
                        {/* <article class="card">
                                    <a href="#">
                                        <span class="icon">&gt; 50</span>
                                        <div class="card-body">
                                            <span>50 triệu trở lên</span>
                                        </div>
                                    </a>
                                </article> */}
                    </div>
                </section>
            </section>
            <section className="extension container">
                <h3>Bạn có muốn là người nhận khuyến mại sớm nhất ?</h3>
                <button className="button">Cài đặt tiện ích</button>
            </section>
        </div>
    )
}

export default index
