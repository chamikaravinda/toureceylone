import React, {Component} from 'react';
import { Link } from 'react-router-dom';

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

var imageStyle = {
    width: "200",
    height: "200px",
}


var divOverlayStyle = {
    zindex: "10",
    backgroundColor: "rgba(0,0,0,0.5)",
    height: "800px",
    textAlign: "center"
};


function calculateGalleFort() {
    var result = "Galle Fort"
    var priceValue = "10";

    document.getElementById("destination").value = result;
    //  document.getElementById("priceVal").value = "sddsds";
}

function calculateUnawatuna() {
    var result = "Unawatuna Beach Hotel"
    var price  = "9";

    document.getElementById("destination").value = result;
   // document.getElementById("price").value = price;
}

function calculateEarl() {
    var result = "Earls Regency Kandy"
    var price = "11";

    document.getElementById("destination").value = result;
   // document.getElementById("price").value = price;
}

function calculateMahaweli() {
    var result = "Hotel Kandy"
    var price = "8";

    document.getElementById("destination").value = result;
  //  document.getElementById("price").value = price;
}

export default class HotelList extends Component{

    render(){
        return(

            <div style={sectionStyle}>
                <div className="container-fluid" style={divOverlayStyle}>
                    <div className="container">
                        <h1 style={{color: "white"}} className="display-1 align-content-center">Hotels</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="card-deck">
                                <div className="card">
                                    <img className="card-img-top" src={hotel1_img}
                                         alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Galle Fort Hotel</h5>
                                            <button onClick={calculateGalleFort} id = "fort"value = "FORT" type="button" className="btn  btn-sm  btn-primary">Book Now</button>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">10$ Per Person</small>
                                        </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={hotel2_img} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Unawatuna Beach Hotel</h5>
                                            <button type="button"  onClick={calculateUnawatuna} value = "UNAWATUNA" className="btn btn-sm  btn-primary">Book Now</button>

                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">$9 Per Person</small>
                                        </div>
                                </div>
                                <div className="card">
                                    <img className="card-img-top" src={hotel3_img} alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Earl's Regency Kandy</h5>
                                            <button type="button" onClick={calculateEarl} value="EARL" className="btn btn-sm  btn-primary">Book Now</button>

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
                                            <button type="button" onClick={calculateMahaweli}  value="MAHAWELI" className="btn btn-sm btn-primary">Book Now</button>

                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">$8 Per Person</small>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <h2 style={{color: "white"}}> Submit Form </h2>


                    <form onSubmit={this.onSubmit}>
                        <div className='row'>
                        <div className="form-group col-md-5 offset-md-1">
                            <label style={{color: "white"}}>User ID : </label>
                            <input type="text"
                                   className="form-control"
                                   value = "USER_34553"
                            />
                        </div>

                        <div className="form-group col-md-5 ">
                            <label style={{color: "white"}}>Destination : </label>
                            <input type="text"
                                   className="form-control"
                                   value = ""
                                   id = "destination"
                            />
                        </div>


                        <div className="form-group col-md-5 offset-md-1">
                            <label style={{color: "white"}}>Number of Days : </label>
                            <input type="text"
                                   className="form-control"
                                   value = ""
                                   ïd = "days"
                            />
                        </div>

                        <div>
                            <br/>
                                <Link to="/destinations" style={{width:610,marginTop:10}} className="btn btn-primary">Proceed</Link>
                        </div>
                        </div>
                    </form>

                </div>


            </div>

        )

    }
}