import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../img/Sri-Lanka-4K.jpg";

import img4 from "../img/category_wildLife.jpg";
import img5 from "../img/unawatuna.jpg";
import img6 from "../img/hikkaduwa.jpg";
import img7 from "../img/pasikuda.png";
import {Link} from "react-router-dom";



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


export default class SandyBeaches extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <div className="container-fluid" style={{width: 1000, height: 1000}}>
                    <div className="container">
                        <br/><br/>
                        <h2>WHERE YOU WANT TO GO</h2>
                        <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src={img5}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Unawatuna</h5>

                                            <Link to="/unawatuna-info" className="btn btn-sm  btn-primary">Choose</Link>

                                        </div>

                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={img6}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Hikkaduwa</h5>
                                            <Link to="/hikkaduwa-info" className="btn btn-sm  btn-primary">Choose</Link>
                                        </div>

                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={img7}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Pasikuda</h5>
                                            <Link to="/pasikuda-info" className="btn btn-sm  btn-primary">Choose</Link>

                                        </div>

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