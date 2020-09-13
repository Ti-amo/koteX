import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../assets/styles/base.css'
import '../assets/styles/header.css'
import '../assets/styles/swiper.css'
import '../assets/styles/product-slide.css'
import '../assets/styles/type-product.css'
import '../assets/styles/subscribe.css'
import '../assets/styles/cover.css'
import '../assets/styles/footer.css'
import LaptopImg from '../assets/images/laptop.png'
import PCImg from '../assets/images/desktop.png'
import HeadphoneImg from '../assets/images/headphone.png'

const Home = () => {

    const [data, setData] = useState([])
    const token = localStorage.getItem("token")
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`${process.env.REACT_APP_API}category/18/product`);
            setData(result.data);
        }
        fetchData()
    }, [])

    const getCheapestPrice = (store) => {
        const minRest = Math.min(...store.map(({ price }) => price));
        // console.log(minRest);
        return minRest;
    }
    // console.log("DATA", data)
    return (
        <main>
            <section className="swiper container">
                <div className="navigation">
                    <ul className="main-nav nav-container nav-style">
                        <li className="nav-item">
                            <i className="fa fa-laptop" />
                            <a href="product.html">Laptop</a>
                            <ul className="childNav-wrap nav-container nav-style laptop">
                                <ul className="childNav-container">
                                    <div className="header-container">
                                        <a className="header" href="/#">
                                            <span>Laptop theo thương hiệu</span>
                                        </a>
                                    </div>
                                    <div className="child-container">
                                        <a href="/#">Apple</a>
                                        <a href="/#">Acer</a>
                                        <a href="/#">ASUS</a>
                                        <a href="/#">Dell</a>
                                        <a href="/#">HP</a>
                                        <a href="/#">Lenovo</a>
                                        <a href="/#">LG</a>
                                        <a href="/#">MSI</a>
                                        <a href="/#">Xiaomi</a>
                                    </div>
                                </ul>
                                <ul className="childNav-container">
                                    <div className="header-container">
                                        <a className="header" href="/#">
                                            <span>Laptop theo nhu cầu</span>
                                        </a>
                                    </div>
                                    <div className="child-container">
                                        <a href="/#">Laptop Gaming</a>
                                        <a href="/#">Laptop đồ hoạ</a>
                                        <a href="/#">Laptop 2 trong 1</a>
                                        <a href="/#">Laptop Sinh viên - Văn phòng</a>
                                        <a href="/#">Laptop mỏng nhẹ</a>
                                        <a href="/#">Laptop Workstation</a>
                                        <a href="/#">Laptop Mini</a>
                                    </div>
                                </ul>
                                <ul className="childNav-container">
                                    <div className="header-container">
                                        <a className="header" href="/#">
                                            <span>Laptop theo kích thước</span>
                                        </a>
                                    </div>
                                    <div className="child-container">
                                        <a href="/#">Dưới 13 inch</a>
                                        <a href="/#">13 - 15 inch</a>
                                        <a href="/#">Trên 15 inch</a>
                                    </div>
                                </ul>
                                <ul className="childNav-container">
                                    <div className="header-container">
                                        <a className="header" href="/#">
                                            <span>Laptop theo giá</span>
                                        </a>
                                    </div>
                                    <div className="child-container">
                                        <a href="/#">Dưới 10 triệu</a>
                                        <a href="/#">10 - 15 triệu</a>
                                        <a href="/#">15 - 20 triệu</a>
                                        <a href="/#">20 - 25 triệu</a>
                                        <a href="/#">25 - 30 triệu</a>
                                        <a href="/#">Trên 30 triệu</a>
                                    </div>
                                </ul>
                                <ul className="childNav-container">
                                    <div className="header-container">
                                        <a className="header" href="/#">
                                            <span>Laptop theo cấu hình chip</span>
                                        </a>
                                    </div>
                                    <div className="child-container">
                                        <a href="/#">Intel Pentium / Celeron</a>
                                        <a href="/#">Intel Core i3</a>
                                        <a href="/#">Intel Core i5</a>
                                        <a href="/#">Intel Core i7</a>
                                        <a href="/#">Intel Core i9</a>
                                        <a href="/#">AMD Ryzen 3</a>
                                        <a href="/#">AMD Ryzen 5</a>
                                        <a href="/#">AMD Ryzen 7</a>
                                    </div>
                                </ul>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <i className="fas fa-desktop-alt" />
                            <a href="/#">Máy tính, PC</a>
                        </li>
                        <li className="nav-item">
                            <i className="fa fa-headphones" />
                            <a href="/#">Tai nghe</a>
                        </li>
                        <li className="nav-item">
                            <i className="fa fa-laptop" />
                            <a href="/#">Laptop</a>
                        </li>
                        <li className="nav-item">
                            <i className="fa fa-desktop-alt" />
                            <a href="/#">Máy tính, PC</a>
                        </li>
                        <li className="nav-item">
                            <i className="fa fa-headphones" />
                            <a href="/#">Tai nghe</a>
                        </li>
                    </ul>
                </div>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={0}
                            className="active"
                        />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/9c675cfb5c099898d0dfdcee70e1bde4_xxhdpi"
                                alt="First slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/0bc6957df0eff33a7822cb1395b6f5f6_xxhdpi"
                                alt="Second slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://cf.shopee.vn/file/08412fb3f03bf091b23e5cc57c9b1726_xxhdpi"
                                alt="Third slide"
                            />
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="banner-right">
                    <img
                        src="https://cf.shopee.vn/file/7beb97c5185d194c17ec3dfc7ced1eb4_xhdpi"
                        alt="card"
                    />
                    <img
                        src="https://cf.shopee.vn/file/16ca623b9aced63a1cfe9f7b9ea9b1c1_xhdpi"
                        alt="card"
                    />
                </div>
            </section>
            {/* END SLIDER */}
            <section className="trending product-slide container">
                <h2 className="product-slide__header">Bộ sưu tập</h2>
                <div className="card-deck">
                    <div className="card">
                        <img
                            src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=14110"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
          </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=14110"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This card has supporting text below as a natural lead-in to
                                additional content.
          </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            src="https://theme.hstatic.net/1000026716/1000440777/14/slideshow_1.jpg?v=14110"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This card has even longer content than the
                                first to show that equal height action.
          </p>
                            <p className="card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* END TRENDING */}
            <section className="product-slide container">
                <h2 className="product-slide__header">Sản phẩm hot</h2>
                <div className="container-fluid">
                    {data.filter(item => item.merchant_store.length > 2)
                        .map((item, idx) => {
                            let store = JSON.parse(item.merchant_store.replaceAll("'", "\""));
                            let cheapestPrice = store.length !== 0 ? getCheapestPrice(store) : 0;
                            return (
                                <article className="card" key={idx}>
                                    <a href={`/${item.product_id}`} onClick={() => {
                                        console.log("PRODUCT", item)
                                    }}>
                                        <img
                                            className="card-img-top"
                                            src={item.image_url}
                                            alt="Card cap"
                                            height="226"
                                        />
                                        <div className="card-body">
                                            <div className="card-text">
                                                {item.name}
                                            </div>
                                            <div className="card-price">
                                                <span className="true-price">{cheapestPrice} đ</span>
                                                <span className="price">16.990.000 đ</span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            )
                        })}
                </div>
            </section>
            {/* END HOT PRODUCT */}
            <section className="type-product container">
                <div className="container">
                    <img src={LaptopImg} alt="card" />
                    <span className="type-title">Laptop</span>
                </div>
                <div className="container">
                    <img src={PCImg} alt="card" />
                    <span className="type-title">Máy tính PC</span>
                </div>
                <div className="container">
                    <img src={HeadphoneImg} alt="card" />
                    <span className="type-title">Phụ kiện</span>
                </div>
            </section>
            {/* END TYPE PRODUCT */}
            <section className="product-slide container">
                <h2 className="product-slide__header">Dành cho bạn</h2>
                <div className="container-fluid">
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/DZ5gwtL8KALjXWUcnQ1wPlM72yMhW5hVuSgitBxcyKBKqeyVErs-0b0rxthJyRcF9XtRHVXYIkvPMotp9A=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6"
                                    FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.7kg)
            </div>
                                <div className="card-price">
                                    <span className="true-price">15.990.000 đ</span>
                                    <span className="price">16.990.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/u-Upc1CuBImIOC-MWHtpU2BT3VystvQX1fLUmtL3vd-SZWMexqNMgaEq-Y25hTiKTOI0Ro0E_pwhjBmak7TG=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Chuột máy tính không dây Logitech M187 (Xanh)
            </div>
                                <div className="card-price">
                                    <span className="true-price">310.000 đ</span>
                                    <span className="price">330.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/Bh3dQOXldLMQN04Ks25TGufsHw9M6v4Qvg7IdTSMsFD0br8jvVo7BGOT9nmhal3phZCdCoK73PEbEpHdpZI=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Laptop MSI GF63 Thin 10SCSR-077VN (15.6" FHD
                                    120Hz/i7-10750H/8GB/512GB SSD/GeForce GTX 1650Ti/Win10/2.2kg)
            </div>
                                <div className="card-price">
                                    <span className="true-price">27.990.000 đ</span>
                                    <span className="price">29.990.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/dFFNFZAk-a985TJHAMqS2hY0-zcs7oG1wP7LlDHQa8VjMGpDsErKk2synnk-_V3KSc3LuXEq0teIDJPCS2CF=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Card màn hình GIGABYTE Radeon RX 570 4GB GDDR5 Gaming
            </div>
                                <div className="card-price">
                                    <span className="true-price">4.590.000 đ</span>
                                    <span className="price">4.990.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/h01DMBO4OTG-Uxi9kUCana8ZCIQjgAvHMxcK0ghTKTsmghwY4ZRaaSSKp2_lExi3c-ovLHA7F1SMkGfR180=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Màn Hình Dell Ultrasharp 24" U2419H (1920x1080/IPS/60Hz/8ms)
            </div>
                                <div className="card-price">
                                    <span className="true-price">22.149.000 đ</span>
                                    <span className="price">23.199.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </section>
            {/* END FOR YOU */}
            <section className="cover container">
                <img
                    src="https://lh3.googleusercontent.com/98DyaJCEBIfpejrqUYFkPS5iJlGBMsVAKpFJBvWwB1xPMHmkx82Z2uzfxDWhux7a_NSjmqGXZScX_mag5Cs=w1184-rw"
                    alt="Card"
                />
            </section>
            {/* END COVER */}
            <section className="product-slide container">
                <h2 className="product-slide__header">Sản phẩm đã xem</h2>
                <div className="container-fluid">
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/DZ5gwtL8KALjXWUcnQ1wPlM72yMhW5hVuSgitBxcyKBKqeyVErs-0b0rxthJyRcF9XtRHVXYIkvPMotp9A=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Laptop ASUS VivoBook 15 A512FA-EJ1281T (15.6"
                                    FHD/i5-10210U/8GB/512GB SSD/Intel UHD/Win10/1.7kg)
            </div>
                                <div className="card-price">
                                    <span className="true-price">15.990.000 đ</span>
                                    <span className="price">16.990.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/u-Upc1CuBImIOC-MWHtpU2BT3VystvQX1fLUmtL3vd-SZWMexqNMgaEq-Y25hTiKTOI0Ro0E_pwhjBmak7TG=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Chuột máy tính không dây Logitech M187 (Xanh)
            </div>
                                <div className="card-price">
                                    <span className="true-price">310.000 đ</span>
                                    <span className="price">330.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/Bh3dQOXldLMQN04Ks25TGufsHw9M6v4Qvg7IdTSMsFD0br8jvVo7BGOT9nmhal3phZCdCoK73PEbEpHdpZI=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Laptop MSI GF63 Thin 10SCSR-077VN (15.6" FHD
                                    120Hz/i7-10750H/8GB/512GB SSD/GeForce GTX 1650Ti/Win10/2.2kg)
            </div>
                                <div className="card-price">
                                    <span className="true-price">27.990.000 đ</span>
                                    <span className="price">29.990.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/dFFNFZAk-a985TJHAMqS2hY0-zcs7oG1wP7LlDHQa8VjMGpDsErKk2synnk-_V3KSc3LuXEq0teIDJPCS2CF=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Card màn hình GIGABYTE Radeon RX 570 4GB GDDR5 Gaming
            </div>
                                <div className="card-price">
                                    <span className="true-price">4.590.000 đ</span>
                                    <span className="price">4.990.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://lh3.googleusercontent.com/h01DMBO4OTG-Uxi9kUCana8ZCIQjgAvHMxcK0ghTKTsmghwY4ZRaaSSKp2_lExi3c-ovLHA7F1SMkGfR180=w500-rw"
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <div className="card-text">
                                    Màn Hình Dell Ultrasharp 24" U2419H (1920x1080/IPS/60Hz/8ms)
                </div>
                                <div className="card-price">
                                    <span className="true-price">22.149.000 đ</span>
                                    <span className="price">23.199.000 đ</span>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </section>
            {/* END WATCHED */}
            <section className="subscribe container">
                <p>Đăng ký để không bỏ lỡ bất kỳ ưu đãi đặc biệt nào cho riêng bạn</p>
                <div>
                    <input type="text" name="helo" id="gl" placeholder="Nhập địa chỉ email của bạn" />
                    <button type="submit">Gửi</button>
                </div>
            </section>
            {/* END SUBSCRIBE */}
        </main>

    )
}

export default Home
