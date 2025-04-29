import { Container } from "./styles";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Card, CardPeople } from "../Card";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function SliderMovies({ info, title }) {
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={5}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1100: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card type={'movie'} onClick={() => {
              }} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export function Slider({ info, title }) {
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={5}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1100: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CardPeople item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export function SliderSeries({ info, title }) {
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={5}
            breakpoints={{
              280: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1100: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card type={'tv'} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export function SliderSimilar({ info, title }) {

    const { type } = useContext(UserContext)
    return (
        <Container>
            <h2>{title}</h2>
            <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={10}
            slidesPerView={5}
            breakpoints={{
                280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1100: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card type={type} item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}
