import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../img/Sri-Lanka-4K.jpg";


var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "none",
    backgroundPosition: "center",

};

var divOverlayStyle = {

    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zindex: "10",
    backgroundColor: "rgba(0,0,0,0.5)"


};


export default class TravelDestination extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <div className="container-fluid" style={{width: 1000, height: 1000}}>
                    <div className="container">
                        <h1 className="display-1 align-content-center">Lets Book A Ticket</h1>
                    </div>
                </div>
            </div>
        )
    }
}