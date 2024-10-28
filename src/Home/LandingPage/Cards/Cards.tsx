import React from 'react';
import RequestButton from '../../RequestButton/RequestButton.tsx';
import '../../RequestButton/RequestButton.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function Cards() {
  return (
    <main>
      <div className='upper-container'>
        <p>Join other Sun harvesters</p>
        <h1>Make something awesome</h1>
        <p>
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
        </p>
        <RequestButton/>
      </div>


      <Swiper direction="horizontal" // Change to "vertical" if you want vertical swipe
      loop={true}
      pagination={{ clickable: true }}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
      scrollbar={{ draggable: true }}
      spaceBetween={20} // Adjust spacing between slides if needed
      slidesPerView={1} // Display one card at a time; adjust for responsive needs
      >
        <div className='card'>
          <SwiperSlide>
            <div>
              <img src="./assets/cloud.svg" alt="" />
              <p>
                Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.
              </p>
              <div className='user-card'>
                <img src="./assets/rwanda.jpeg" alt="" />
                <div className='user-card para-div'>
                  <p>Rwanda Melflor</p>
                  <p>zerowaste.com</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./assets/star.svg" alt="" />
              <p>
              Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.
              </p>
              <div className='user-card'>
                <img src="./assets/rwanda.jpeg" alt="" />
                <div className='user-card para-div'>
                  <p>Rwanda Melflor</p>
                  <p>zerowaste.com</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./assets/tower.svg" alt="" />
              <p>
              Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.
              </p>
              <div className='user-card'>
                <img src="./assets/rwanda.jpeg" alt="" />
                <div className='user-card para-div'>
                  <p>Rwanda Melflor</p>
                  <p>zerowaste.com</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src="./assets/timer.svg" alt="" />
              <p>
              Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.
              </p>
              <div className='user-card'>
                <img src="./assets/rwanda.jpeg" alt="" />
                <div className='user-card para-div'>
                  <p>Rwanda Melflor</p>
                  <p>zerowaste.com</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </main>
  )
}

export default Cards
