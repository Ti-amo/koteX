import React from 'react'
import '../assets/styles/base.css'
import '../assets/styles/header.css'
import '../assets/styles/breadcrumb.css'
import '../assets/styles/cover.css'
import '../assets/styles/product-filter.css'
import '../assets/styles/product-slide.css'
import '../assets/styles/product-list.css'
import '../assets/styles/footer.css'

const Product = () => {
    return (
        <main>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <i className="fas fa-home-lg-alt" />
                    </li>
                    <li className="breadcrumb-item">
                        <a href>Product</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Product
      </li>
                </ol>
            </nav>
            {/* END BREADCRUMB */}
            <section className="products">
                <div className="container">
                    <button className="btn button btn-filter">Bộ Lọc</button>
                    <div className="row">
                        <aside className="filter col-lg-3">
                            <div className="filter-container">
                                <span className="filter-title">Mục đích sử dụng</span>
                                <ul className="filter-product filter-product-1">
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-check-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Laptop Gaming</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Đồ hoạ, kiến trúc</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">
                                            Phổ thông, văn phòng
                </span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">
                                            Mỏng nhẹ, thời trang
                </span>
                                    </li>
                                </ul>
                            </div>
                            {/* END FILTER USES */}
                            <div className="filter-container">
                                <span className="filter-title">Khoảng giá</span>
                                <ul className="filter-product filter-product-1">
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-check-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Dưới 10 triệu</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">
                                            10 triệu - 20 triệu
                </span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Trên 30 triệu</span>
                                    </li>
                                </ul>
                                <span className="input-range-title">Chọn khoảng giá</span>
                                <div className="input-range-container">
                                    <input className="input-range" type="text" />
                                    <span> - </span>
                                    <input className="input-range" type="text" />
                                </div>
                                <button className="btn button">OK</button>
                            </div>
                            {/* END FILTER COST */}
                            <div className="filter-container">
                                <span className="filter-title">Hãng sản xuất</span>
                                <ul className="filter-product filter-product-2">
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-check-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Acer</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Asus</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Apple</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Dell</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">HP</span>
                                    </li>
                                    <li>
                                        <div className="checker">
                                            <i className="fa fa-square" aria-hidden="true" />
                                        </div>
                                        <span className="filter-product-title">Lenovo</span>
                                    </li>
                                </ul>
                            </div>
                            {/* END FILTER BRAND */}
                        </aside>
                        <section className="col-lg-9 col-md-12">
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
                                        <li
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to={1}
                                        />
                                        <li
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to={2}
                                        />
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
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#carouselExampleIndicators"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        />
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </section>
                            {/* END SWIPER */}
                            <div className="list-product-header">
                                <div className="list-product-sort">
                                    <span className="button btn-sort">Ưu tiên xem</span>
                                    <ul className="sort-item dropdown">
                                        <li>
                                            <a href>Hàng mới</a>
                                        </li>
                                        <li>
                                            <a href>Bán chạy</a>
                                        </li>
                                        <li>
                                            <a href>Giảm giá nhiều</a>
                                        </li>
                                        <li>
                                            <a href>Giá thấp</a>
                                        </li>
                                        <li>
                                            <a href>Giá cao</a>
                                        </li>
                                        <li>
                                            <a href>Chọn lọc</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <form action="" class="list-product-search">
										<input type="text" placeholder="Tìm trong Laptop - Máy Vi Tính - Linh kiện" value="" />
										<button><i class="far fa-search"></i></button>
									</form> */}
                            </div>
                            <div className="list-product-container">
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
                                                120Hz/i7-10750H/8GB/512GB SSD/GeForce GTX
                                                1650Ti/Win10/2.2kg)
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
                                                120Hz/i7-10750H/8GB/512GB SSD/GeForce GTX
                                                1650Ti/Win10/2.2kg)
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
                                                120Hz/i7-10750H/8GB/512GB SSD/GeForce GTX
                                                1650Ti/Win10/2.2kg)
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
                                                120Hz/i7-10750H/8GB/512GB SSD/GeForce GTX
                                                1650Ti/Win10/2.2kg)
                  </div>
                                            <div className="card-price">
                                                <span className="true-price">27.990.000 đ</span>
                                                <span className="price">29.990.000 đ</span>
                                            </div>
                                        </div>
                                    </a>
                                </article>
                            </div>
                            {/* END LIST PRODUCT */}
                            <div className="col-lg-9 m-auto">
                                <nav aria-label="page navigation">
                                    <ul className="pagination justify-content-center mt-4">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="/#" tabIndex={-1}>
                                                <svg
                                                    className="svg-inline--fa fa-chevron-left fa-w-8"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="far"
                                                    data-icon="chevron-left"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                    data-fa-i2svg
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z"
                                                    />
                                                </svg>
                                                {/* <i class="far fa-chevron-left"></i> */}
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="/#">
                                                2 <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item disabled">
                                            <a className="page-link" href="/#">
                                                ...
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/#">
                                                5
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="/#">
                                                <svg
                                                    className="svg-inline--fa fa-chevron-right fa-w-8"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    data-prefix="far"
                                                    data-icon="chevron-right"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                    data-fa-i2svg
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z"
                                                    />
                                                </svg>
                                                {/* <i class="far fa-chevron-right"></i> */}
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* END NAV PAGE */}
                        </section>
                        {/* END PRODUCT LIST */}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Product
