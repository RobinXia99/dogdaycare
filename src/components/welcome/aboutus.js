import React from "react";
import '../../styles/welcome.css';
import dogPool from '../../images/dogpool.png';

const DaycareInfo = () => {
    return (
        <div className="about_us">
            <section className="about_us_text_container">
                <h2 className="about_us_title">DOGS DESERVE THE BEST</h2>
                <br></br>
                
                <div className="about_us_body">
                <p>
                    Doggy Daycare provides everything a dog needs!
                    Love and care - professional trainers - nutritious meals -
                    companionship - endless toys and more! That's not all!
                    Our new and modern facility have multiple areas 
                    ranging from grassy fields, a newly built swimming pool,
                    indoor & outdoor playgrounds and most importantly - 
                    a cozy napping room after an adventurous day! 
                </p>
                    <aside className="poster_find_us">- Where to find us -</aside>
                </div>
                
                
            </section>
            <aside> <img className="about_us_img" src={dogPool}></img></aside>
            <h3 className="dog_quote">Dogs do speak, but only to those who know how to listen. - Orhan Pamuk</h3>
        </div>
    )
}


export default DaycareInfo;