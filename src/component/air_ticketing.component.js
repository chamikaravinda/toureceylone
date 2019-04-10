import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from "../img/superman.jpg";
import img1 from "../img/srilankanair.jpg";
import img2 from "../img/malayasiaair.jpg";
import img3 from "../img/quantas.jpg";
import img4 from "../img/flydubai.jpg";


var sectionStyle = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "none",
    backgroundPosition: "center",

};

var divOverlayStyle = {
    zindex: "10",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "800px",
    textAlign: "center"


};

var imageStyle = {
    width: "200",
    height: "120px",
}


export default class AirTicketing extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <br/><br/>
                <div className="container-fluid" style={divOverlayStyle}>
                    <br/><br/>
                    <h2 style={{color:"white"}}><b>Lets Fly Mate</b></h2>
                    <br/>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" src={img1}
                                         alt="Card image cap" style={imageStyle}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Sri Lankan AirLines</h5>
                                        <button type="button" className="btn  btn-sm  btn-primary">Choose
                                        </button>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={img2}
                                         alt="Card image cap" style={imageStyle}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Malaysian Air</h5>
                                        <button type="button" className="btn btn-sm  btn-primary">Choose
                                        </button>

                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago></small>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={img3}
                                         alt="Card image cap" style={imageStyle}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Quantas</h5>
                                        <button type="button" className="btn btn-sm  btn-primary">Choose
                                        </button>

                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago></small>
                                    </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={img4}
                                         alt="Card image cap" style={imageStyle}/>
                                    <div className="card-body">
                                        <h5 className="card-title">Fly Dubai</h5>
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

        )
    }
}

