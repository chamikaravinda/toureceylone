import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../img/Sri-Lanka-4K.jpg";
import img1 from "../img/category_ancient cities.jpg";
import img2 from "../img/category_hillCountry.jpg";
import img3 from "../img/category_SeaSide.jpg";
import img4 from "../img/category_wildLife.jpg";
import WildLifeDestination from './destinations_wildLife.component';
import AirTicketing from "./air_ticketing.component";
import SandyBeaches from "./sandy_beaches.component";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


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
                <Router>
                <div className="container-fluid" style={{width: 1000, height: 1000}}>
                    <div className="container">
                        <br/><br/>
                        <h2 style={{color: "white"}}>WHERE YOU WANT TO GO</h2>
                        <br/>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card-deck">
                                        <div className="card">
                                            <img className="card-img-top" src={img2}
                                                 alt="Card image cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Hill Country</h5>
                                                    <button type="button" className="btn  btn-sm  btn-primary">Choose
                                                    </button>
                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </div>
                                        </div>
                                        <div className="card">
                                            <img className="card-img-top" src={img3}
                                                 alt="Card image cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Sandy Beaches</h5>
                                                        <Link to="/beaches" className="btn btn-primary">Choose</Link>


                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </div>
                                        </div>
                                        <div className="card">
                                            <img className="card-img-top" src={img4}
                                                 alt="Card image cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Explore Wild Life</h5>

                                                         <Link to="/wildlife"  className="btn btn-sm btn-primary">Destinations</Link>


                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </div>
                                        </div>
                                        <div className="card">
                                            <img className="card-img-top" src={img1}
                                                 alt="Card image cap"/>
                                                <div className="card-body">
                                                    <h5 className="card-title">Ancient Cities </h5>
                                                    <button type="button" className="btn btn-sm btn-primary">Choose
                                                    </button>

                                                </div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Last updated 3 mins ago</small>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
                </Router>
            </div>
        )
    }
}