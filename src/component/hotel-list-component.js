import React, {Component} from 'react';
//import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../img/Sri-Lanka-4K.jpg";

import hotel1_img from "../img/hotel1.jpg";
import hotel2_img from "../img/hotel2.jpg";
import hotel3_img from "../img/hotel3.jpg";
import hotel4_img from "../img/hotel4.jpg";

var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "none",
    backgroundPosition: "center",

};


export default class HotelList extends Component{

    render(){
        return(

            <div style={sectionStyle}>
                <div className="container-fluid" style={{width: 1000, height: 1000}}>
                    <div className="container">
                        <h1 className="display-1 align-content-center">Hotels</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" src={hotel1_img}
                                         alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Galle Fort Hotel</h5>
                                            <button type="button" className="btn  btn-sm  btn-primary">Book Now</button>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">10$ Per Person</small>
                                        </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={hotel2_img} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Unawatuna Beach Hotel</h5>
                                            <button type="button" className="btn btn-sm  btn-primary">Book Now</button>

                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">$9 Per Person</small>
                                        </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={hotel3_img} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Earl's Regency Kandy</h5>
                                            <button type="button" className="btn btn-sm  btn-primary">Book Now</button>

                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">$11 Per Person</small>
                                        </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={hotel4_img}
                                         alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Mahaweli Reach Hotel Kandy</h5>
                                            <button type="button" className="btn btn-sm btn-primary">Choose</button>

                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">$8 Per Person</small>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}