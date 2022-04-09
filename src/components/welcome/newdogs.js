import React, { useEffect, useState } from "react";
import { parsePath, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../styles/welcome.css';
import '../../styles/fa-icon.css';
import '../../styles/dogslides.css';
import { getDogs } from "../../models/storagemodel";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NewDogs = () => {


    let { chipNr } = useParams();

    const [my_swiper, set_my_swiper] = useState({});

    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setDogs(getDogs);
    },[])

    useEffect(() =>{
        if(dogs.length > 3) {
            setLoading(false);
        }
    },[dogs])





    

    return loading ? 
    
    (
        <div>Loading</div>
    )
    :
    (
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

                <SwiperSlide> <DogSlide dog={dogs[5]}/> </SwiperSlide>
                <SwiperSlide> <DogSlide dog={dogs[12]}/> </SwiperSlide>
                <SwiperSlide> <DogSlide dog={dogs[6]}/> </SwiperSlide>
                <SwiperSlide> <DogSlide dog={dogs[13]}/> </SwiperSlide>
                <SwiperSlide> <DogSlide dog={dogs[15]}/> </SwiperSlide>

            </Swiper>
            </div>
            
            <article className="slide_button" onClick={() => { my_swiper.slideNext() }}>
                <FontAwesomeIcon icon={faChevronRight}/>
            </article>


            </div>
            
            
        </div>
    )
}

const DogSlide = ({dog}) => {



    return (

        <div className="dog_image_outer_holder">
            <div className="dog_image_holder">
            <h3 className="woof">WOOF</h3>

            <img className="dog_image" src={dog.img}/>

            <DogTags dog={dog}></DogTags>

            </div>
        </div>
        
    )


}

const DogTags = ({dog}) => {

    return (
        <div className="dog_tag_container">
            <article>
                <FontAwesomeIcon className="fa_icon_dogtag" icon={ faTag } />
                <h3>{dog.name}</h3>
            </article>

            <article>
                <FontAwesomeIcon className="fa_icon_dogtag" icon={ faPaw } />
                <h3>{dog.breed}</h3>
            </article>
        </div>
    )
}

export default NewDogs;