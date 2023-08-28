//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/counter.jsx";


let simplecounter = 0;
setInterval(function(){
    const fourth = Math.floor (simplecounter/1000);
    const third = Math.floor (simplecounter/100);
    const second = Math.floor (simplecounter/10);
    const first = Math.floor (simplecounter/1);
    console.log(fourth, third, second, first);
    simplecounter++;

    //render your react application
    ReactDOM.render(
        <Counter digitOne={first} digitTwo={second} digitThree={third} digitFour={fourth}/>,
        document.querySelector("#app")
    )

}, 1000);