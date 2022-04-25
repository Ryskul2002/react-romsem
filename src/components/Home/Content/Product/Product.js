import React, {useEffect, useState,useContext} from 'react';
import {CustomContext} from "../../../../Context";
import './product.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useParams} from 'react-router-dom'
import PizzaSize from "../Routes/RouteContent/PizzaSize";
import WantBuy from "../Routes/RouteContent/WantBuy";
import Price from "../Routes/RouteContent/Price";
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


const Product = () => {

    const {addItem} = useContext(CustomContext)

    const [product,setProduct] = useState({})
    const [rec,setRec] = useState([])
    const {plusOne,minusOne} = useContext(CustomContext)
    const {path,id} = useParams()

    useEffect(()=>{
        axios(`http://localhost:8080/${path}/${id}`)
            .then(({data})=> setProduct(data))
        axios(`http://localhost:8080/${path}`)
            .then(({data})=> setRec(data.slice(0,6)))
    },[path,id])

    const navigate = useNavigate();

    return (
        <div className="product">
            <div className="product__link">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#FF9846"/>
                    <path d="M11.75 5.75L7.25 10.25L11.75 14.75" stroke="#F2F2F2"/>
                </svg>
                <span className="product__link-text" onClick={()=> navigate(-1)}>Назад</span>
            </div>
            <div className="product__content">
                <img className="product__content-img" src={product.imageUrl} alt={product.title}/>
                <div className="product__content-info">
                    <h2 className="product__content-title">{product.title}</h2>
                    <PizzaSize item={product}/>
                    <div className="product__content-buy">
                       <Price price={product.price}/>
                        <div className="product__content-pay">
                            <span className="product__content-pay-back" onClick={()=> minusOne(product)}>-</span>
                            <span className="product__content-pay-count">1 сом</span>
                            <span className="product__content-pay-btn" onClick={()=> plusOne(product)}>+</span>
                        </div>
                    </div>
                    <WantBuy item={product}/>
                </div>
            </div>
            <h3 className="product__rec">Рекомендуем к этому товару</h3>
            <Swiper
                slidesPerView={3}
                spaceBetween={130}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {rec.map((item)=>(
                    <SwiperSlide key={`${item.id}${item.title}`}>
                        <div className="product__swiper-card">
                            <img className="product__swiper-img" src={item.imageUrl} alt={item.title}/>
                            <h3 className="product__swiper-title">{item.title}</h3>
                            <div className="product__swiper-buy">
                                <Price price={item.price}/>
                                <button className="product__swiper-btn" onClick={()=> addItem(item)}>+</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Product;