import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function CardsSwiper() {
    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={
            {
                0:{
                    slidesPerView:1,
                    spaceBetween:30,
                },
                682:{
                    slidesPerView:2,
                    spaceBetween:30,
                },
                1164:{
                    slidesPerView:3,
                    spaceBetween:30,
                }
            }
        }
        >
          <SwiperSlide>
            <div class="swiper-slide cardsSlide">
                <img src="images/folija.jpg" alt=""/>
                <span>Kese i folije</span>
                <br/>
                <hr noshade/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide cardsSlide">
                <img src="images/spnge.jpeg" alt=""/>
                <span>za kuhinju</span>
                <br/>
                <hr noshade/>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide cardsSlide">
                <img src="images/toalet.webp" alt=""/>
                <span>Ubrusi i toalet papiri</span>
                <br/>
                <hr noshade/>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide cardsSlide">
                <img src="images/cream.png" alt=""/>
                <span>KOZMETIKA</span>
                <br/>
                <hr noshade/>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide cardsSlide">
                <img src="images/bucket.jpg" alt=""/>
                <span>PlastiČne Kante</span>
                <br/>
                <hr noshade/>
            </div>

          </SwiperSlide>
        </Swiper>
      </>
    );
  }
  