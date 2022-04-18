import React, { useEffect } from "react"
import { useState } from "react"


//export const [DOGS, SETDOGS] = useState([]);

const dogsUrl = 'https://api.jsonbin.io/b/6245894cd96a510f028de1a8';

export async function fetchData() {
    const res = await fetch(dogsUrl);

    if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      const data = await res.json();
      
      localStorage.setItem('DOGS', JSON.stringify(data));

      //return JSON.parse(localStorage.getItem('DOGS'));

      /*
    res
    .json()
    .then( data => {
        localStorage.setItem('DOGS', JSON.stringify(data))
    })
    .catch(err => console.log(err));

    if(res.json()) {
       return JSON.parse(localStorage.getItem('DOGS'));
    }*/

}

export function getDogs() {
    const dogs = JSON.parse(localStorage.getItem('DOGS'));

    return dogs;
}