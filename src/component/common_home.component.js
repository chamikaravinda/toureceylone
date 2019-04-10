import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../img/Sri-Lanka-4K.jpg";
import { Link } from 'react-router-dom';

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "none",
    backgroundPosition: "center",

};


var divOverlayStyle = {
    zindex: "10",
    backgroundColor: "rgba(0,0,0,0.5)"
};


export default class  HomeComponent extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <div className="container-fluid" style={{width: 1000, height: 1000}}>
                    <div className="container">
                        <br/><br/><br/>
                        <div className="col-md-10 offset-md-1" style={divOverlayStyle}>
                            <h1 className="display-1 align-content-center" style={{color:"white"}}><b>Welcome To the Miracle of Asia </b></h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}