import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../img/Sri-Lanka-4K.jpg";
import img1 from "../img/wild_Life_bundala.jpg";
import img2 from "../img/wild_Life_kumana.jpg";
import img3 from "../img/wild_Life_mineriya.jpg";
import img4 from "../img/wild_Life_Sinharaja.jpg";
import img5 from "../img/wild_Life_udawala.jpg";
import img6 from "../img/wild_Life_wilpaththu.jpg";

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


export default class WildLifeDestination extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <div className="container-fluid" style={{width: 1000, height: 1000}}>
                    <div className="container">
                        <br/><br/>
                        <h2>National Parks</h2>
                        <br/>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src={img2}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Kumana</h5>
                                            <button type="button" className="btn  btn-sm  btn-primary">Choose
                                            </button>
                                        </div>

                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={img3}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Minneriya</h5>
                                            <button type="button" className="btn btn-sm  btn-primary">Choose
                                            </button>
                                        </div>

                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={img5}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Udawalawa</h5>
                                            <button type="button" className="btn btn-sm  btn-primary">Choose
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <br/><br/>
                            <div className="col-md-10 offset-md-1">
                                <div className="card-deck">
                                    <div className="card">
                                        <img className="card-img-top" src={img6}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Wilpathu</h5>
                                            <button type="button" className="btn  btn-sm  btn-primary">Choose
                                            </button>
                                        </div>

                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={img1}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Bundala</h5>
                                            <button type="button" className="btn btn-sm  btn-primary">Choose
                                            </button>
                                        </div>

                                    </div>
                                    <div className="card">
                                        <img className="card-img-top" src={img4}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Sinharaja Rain Forest</h5>
                                            <button type="button" className="btn btn-sm  btn-primary">Choose
                                            </button>
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