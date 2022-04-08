import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../styles/welcome.css';
import '../../styles/fa-icon.css';
import '../../styles/dogslides.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NewDogs = () => {


    let { chipNr } = useParams();
    let dog;

    const [my_swiper, set_my_swiper] = useState({});

    

    return (
        <div className="new_dogs_container">
            <h3 className="new_dogs_title">MEET OUR NEWEST FRIENDS</h3>
            
            <div className="slides_container">

                <article className="slide_button" onClick={() => { my_swiper.slidePrev() }}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </article>

            <div className="swiper_holder">
                <Swiper
                slidesPerView={1}
                spaceBetween={50}
                onInit={(ev) => {
                    set_my_swiper(ev)
                }}
                >

                <SwiperSlide> <DogSlide dogs={'https://images.dog.ceo/breeds/pomeranian/n02112018_8161.jpg'}/> </SwiperSlide>
                <SwiperSlide> <DogSlide dogs={'https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg'}/> </SwiperSlide>
                <SwiperSlide> <DogSlide dogs={'https://images.dog.ceo/breeds/akita/Akita_inu_blanc.jpg'}/> </SwiperSlide>

            </Swiper>
            </div>
            
            <article className="slide_button" onClick={() => { my_swiper.slideNext() }}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </article>


            </div>
            
            
        </div>
    )
}

const DogSlide = ({dogs}) => {


    return (

        <div className="dog_image_outer_holder">
            <div className="dog_image_holder">
            <h3 className="woof">WOOF</h3>

            <img className="dog_image" src={dogs}/>

            <DogTags></DogTags>

            </div>
        </div>
        
    )


}

const DogTags = (dog) => {

    return (
        <div className="dog_tag_container">
            <article>
                <FontAwesomeIcon className="fa_icon_dogtag" icon={ faTag } />
                <h3>Wilma</h3>
            </article>

            <article>
                <FontAwesomeIcon className="fa_icon_dogtag" icon={ faPaw } />
                <h3>Akita</h3>
            </article>
        </div>
    )
}

export default NewDogs;