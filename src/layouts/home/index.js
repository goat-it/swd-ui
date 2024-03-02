import React from "react";
import Header from "~/components/Header";
import "~/layouts/home/Home.scss";
import Product from "~/components/Product";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const imageCate = [
    {
      src: "./Cchungcu.png",
      Text: "Chung Cư",
    },
    {
      src: "./Cnha.png",
      Text: "Nhà Phố",
    },
    {
      src: "./Croom.png",
      Text: "Phòng Khách",
    },
    {
      src: "./Ckitchen.png",
      Text: "Phòng Bếp",
    },
    {
      src: "./cBed.png",
      Text: "Phòng Ngủ",
    },
  ];
  const Products = [
    {
      id: 1,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 2,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 3,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 4,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 5,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
    {
      id: 6,
      src: "https://noithatmanhhe.vn/media/37302/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&ranchor=center&width=80&height=68&format=jpg",
    },
  ];
  const navigate = useNavigate();
  const handleProductClick = (productId) => {
    navigate("/XemSanPham",{ state: { productId } });
  };
  return (
    <>
      <div className="home">
        <Header />
        <div className="home-view">
          <div className="home-showVideo">
            <img src="./Chungcu.png" alt="Chungcu" />
            {/* <video controls="f">
              
            </video> */}
          </div>
          <div className="home-Cate">
            <div className="home_cate_text">
              DỰ AN THIẾT KẾ - THI CÔNG NỘI THẤT
            </div>
            <div className="home_cate_icon">
              {imageCate.map((item, index) => (
                <div key={index} className="cate_icon_index">
                  <img src={item.src} alt="cateimgae" />
                  <div className="cate_icon_text">{item.Text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="home_product_cate">
            {Products.map((product, index) => (
              <div key={index} className="product_index" onClick={() => handleProductClick(product.id)}>
                <Product id={product.id} imageUrl={product.src} />
              </div>
            ))}
          </div>
          <div className="home_intro">
            <div className="intro_text">
              <div className="intro_1">
                Khác biệt <br />
                của chúng tôi!
              </div>
              <div className="intro_2">
                Lý do làm nội thất trọn gói nên chọn Mạnh Hệ
              </div>
              <div className="intro_3">
                <li>Đội KTS chuyên nghiệp - bản vẽ đạt chuẩn</li>
                <li>Có nhà xưởng sản xuất trực tiếp - giảm 30% chi phí</li>
                <li>Miễn phí thiết kế thi công nội thất trọn gói</li>
                <li>Cam kết thực hiện đúng 100% hợp đồng</li>
                <li>Bảo hành 2 năm - có mặt sau 48h tiếp nhận thông tin</li>
              </div>
            </div>
            <img src="./GOATINTERIOR.PNG" alt="image" className="image_intro" />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
