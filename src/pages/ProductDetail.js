import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../assets/styles/detail.css'
import axios from 'axios';

const ProductDetail = () => {

    let { productId } = useParams();

    const [data, setData] = useState();
    const [stores, setStores] = useState();
    const [cheapestPrice, setCheapestPrice] = useState();
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`${process.env.REACT_APP_API}product/${productId}`);
            setData(result.data);
        }
        fetchData()
    }, [])

    useEffect(() => {
        const product = data ? data.merchant_store : "[]"
        let list = JSON.parse(product.replaceAll("'", "\""));
        const minRest = Math.min(...list.map(({ price }) => price));
        // console.log(minRest);
        setStores(list)
        setCheapestPrice(minRest)
    }, [data])

    if (!data) {

        return (<p>Loading...</p>)
    }


    console.log("STORE", stores, "PRICE", cheapestPrice)

    return (
        <main>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <svg
                            className="svg-inline--fa fa-home-lg-alt fa-w-18"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="home-lg-alt"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            data-fa-i2svg
                        >
                            <path
                                fill="currentColor"
                                d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V368a16 16 0 0 1 16-16h96a16 16 0 0 1 16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm282.69 121.28l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z"
                            />
                        </svg>
                        {/* <i class="fas fa-home-lg-alt"></i> */}
                    </li>
                    <li className="breadcrumb-item">
                        <a href="/#">Product</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Product
      </li>
                </ol>
            </nav>
            {/* END NAV */}
            <section className="detail">
                <div className="container">
                    <div className="product-slide-container">
                        <div className="big-image">
                            <img
                                alt="laptop"
                                src={data.image_url}
                            />
                        </div>
                    </div>
                    <div className="product-info-container">
                        <a href="#">
                            <h1>{data ? data.name : ''}</h1>
                        </a>
                        <div className="rating-star">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <div className="brand">
                            <span>Nhãn hiệu: </span>
                            <a href="https://www.sosanhgia.com/b391-microsoft.html">Microsoft</a>
                        </div>
                        <div className="product-short-desc">
                            <div className="short-desc">
                                <p>
                                    CPU: Intel Core i5-1035G4
              <br />
              - Card đồ họa: Intel Iris Plus Graphics
              <br />
              - Bộ nhớ trong: 256 GB SSD
              <br />
              - RAM: 8 GB
              <br />
              - Kích thước màn hình: 12.3” PixelSense Display
              <br />
              - Độ phân giải: 2736 x 1824 pixels (267 PPI)
              <br />- Trọng lượng: 0.775 kg
            </p>
                            </div>
                        </div>
                        <div className="priority-store">
                            <span>Giá tốt từ nơi bán:</span>
                            <span className="store-price product-price">{cheapestPrice.toLocaleString()}</span>
                            <div className="merchant-logo-wrapper">
                                <div className="merchant-logo">
                                    <img src="https://img.sosanhgia.com/images/1ef1aee0e2cb435893d32fe07031ec0c/shopee-mall.jpg" alt="card" />
                                </div>
                            </div>
                            <a className="button" href="#">
                                Đến nơi bán
          </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* END DETAIL */}
            <section className="stores">
                <div className="container">
                    <h4 className="header">Bảng giá bán</h4>
                    {stores.map((item, idx) => {
                        return (
                            <article key={idx} className="product">
                                <div className="img">
                                    <img
                                        src={data.image_url}
                                        alt="card"
                                    />
                                </div>
                                <div className="detail">
                                    <div className="product-name">
                                        {data ? data.name : ''}<span className="brand">Shopee</span>
                                        <div className="promotions">
                                            <a href="#" className="button">Xem khuyến mãi</a>
                                        </div>
                                    </div>
                                    <div className="merchant-logo-wrapper">
                                        <div className="merchant-logo">
                                            {/* <img src="https://img.sosanhgia.com/images/1ef1aee0e2cb435893d32fe07031ec0c/shopee-mall.jpg" alt="card" /> */}
                                        </div>
                                    </div>
                                    <div className="price-wrapper">
                                        <div className="product-price grey-text">{item.price.toLocaleString()}</div>
                                        <div className="date-update">Cập nhật 7 giờ trước</div>
                                    </div>
                                    <div className="product-go-action">
                                        <a href={item.url_store} target="_blank" rel="noopener noreferrer" className="button">Đến nơi bán</a>
                                    </div>
                                </div>
                            </article>
                        )
                    })}


                </div>
            </section>
        </main>

    )
}

export default ProductDetail
