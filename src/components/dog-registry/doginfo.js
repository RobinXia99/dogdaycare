import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../styles/doginfo.css';
import '../../styles/search.css';


const DogInfo = ({dogs}) => {

    let params = useParams();

    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let index = (dogs).findIndex(function(dog, index) {
            return dog.chipNumber === params.chipid;
        });

        setDog(dogs[index]);
        
        if(dogs != null) {
            setLoading(false);
        }

    },[])

    return loading ? 

    (
        <div></div>
    )
    
    :

    (
        <div className="dog_info_wrap">
            <h2>{dog.name} | <span className={dog.present ? 'present' : 'absent'}>{dog.present ? 'Present' : 'Absent'}</span></h2>
            <div className="dog_info_card">
                <img src={dog.img} className='dog_image'></img>
                <div className="dog_data_holder">
                    <article>
                        <span>Breed</span>
                        <span>{dog.breed}</span>
                    </article>
                    <article>
                        <span>Age</span>
                        <span>{dog.age}</span>
                    </article>
                    <article>
                        <span>Sex</span>
                        <span>{dog.sex}</span>
                    </article>
                    <article>
                        <span>Chip Number</span>
                        <span>{dog.chipNumber}</span>
                    </article>
                    <article>
                        <span>Owner</span>
                        <span>{dog.owner.name} {dog.owner.lastName}</span>
                    </article>
                    <article>
                        <span>Contact</span>
                        <span>{dog.owner.phoneNumber}</span>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default DogInfo;