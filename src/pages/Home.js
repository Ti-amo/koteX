import React from 'react'
import '../assets/styles/base.css'
import '../assets/styles/header.css'
import '../assets/styles/swiper.css'
import '../assets/styles/product-slide.css'
import '../assets/styles/type-product.css'
import '../assets/styles/subscribe.css'
import '../assets/styles/cover.css'
import '../assets/styles/footer.css'

const Home = () => {
    return (
        <main>
            <section className="swiper">
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
                                src="https://cdn.originpc.com/img/home/slides/2020/financing-zero-apr-2.jpg"
                                alt="First slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://cdn.originpc.com/img/home/slides/2020/new-eon15-x-2.jpg"
                                alt="Second slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100"
                                src="https://cdn.originpc.com/img/home/slides/2020/powered-by-amd.jpg"
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
            </section>
            {/* END SLIDER */}
            <section className="trending product-slide">
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
            <section className="product-slide">
                <h2 className="product-slide__header">Sản phẩm hot</h2>
                <div className="container-fluid">
                    <article className="card">
                        <a href="/#">
                            <img
                                className="card-img-top"
                                src="https://hanoicomputercdn.com/media/product/250_51287_id_cooling_se_234_argb_1.jpg"
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
                                alt="Card"
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
                </div>
            </section>
            {/* END HOT PRODUCT */}
            <section className="type-product">
                <div className="container">
                    <img src="./images/laptop.png" alt="g" />
                    <span className="type-title">Laptop</span>
                </div>
                <div className="container">
                    <img src="./images/desktop.png" alt="g" />
                    <span className="type-title">Máy tính PC</span>
                </div>
                <div className="container">
                    <img src="./images/headphone.png" alt="h" />
                    <span className="type-title">Phụ kiện</span>
                </div>
            </section>
            {/* END TYPE PRODUCT */}
            <section className="product-slide">
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
            <section className="cover">
                <img
                    src="https://cdn.originpc.com/img/built-by-americans/main-bg.jpg"
                    alt="Hiuau"
                />
            </section>
            {/* END COVER */}
            <section className="product-slide">
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
            <section className="subscribe">
                <p>Đăng ký để không bỏ lỡ bất kỳ ưu đãi đặc biệt nào cho riêng bạn</p>
                <div>
                    <input type="text" name="register" id="register" placeholder="Nhập địa chỉ email của bạn" />
                    <button type="submit">Gửi</button>
                </div>
            </section>
            {/* END SUBSCRIBE */}
        </main>

    )
}

export default Home
