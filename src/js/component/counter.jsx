import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Counter = (props) => {
	return (
		<div className="mainContainer">

            <div className="icon">
                <i class="far fa-clock"></i>
            </div>

            <div className="fourth">{props.digitFour % 10}</div>

            <div className="third">{props.digitThree % 10}</div>

            <div className="second">{props.digitTwo % 10}</div>

            <div className="first">{props.digitOne % 10}</div>
            
        </div>
	);
};


export default Counter;
