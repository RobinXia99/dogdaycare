import React, { Fragment } from "react";
import Poster from "./poster";
import '../../App.css';
import DaycareInfo from "./aboutus";
import NewDogs from "./newdogs";

const Welcome = ({dogs}) => {
    return (
        <Fragment>
            <Poster></Poster>
            <div id='main-wrap'>
                <DaycareInfo></DaycareInfo>
                <NewDogs dogs={dogs} ></NewDogs>
                </div>
        </Fragment>
    
    )
}

export default Welcome;