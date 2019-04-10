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


export default class SelectCountry extends Component {
    render() {
        return (
            <div style={sectionStyle}>
                <div className="container">

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <div className="col-md-6 offset-md-3 ">
                            <form>
                                <div className="form-row align-items-center ">
                                    <div className="col-auto my-1 offset-md-3">

                                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                            <option selected>Select Your Country ...</option>
                                            <option value="1">Sri Lanka</option>
                                            <option value="2">Malayasiya</option>
                                            <option value="3">Finland</option>
                                            <option value="3">India</option>
                                            <option value="3">Bangladesh</option>
                                            <option value="3">Moldives</option>
                                            <option value="3">Germen</option>
                                            <option value="3">Spain</option>
                                            <option value="3">Amarica</option>
                                            <option value="3">England</option>

                                        </select>
                                    </div>
                                    <div className="col-auto my-1">

                                    </div>
                                    <div className="col-auto my-1" style={{margin: 10}}>
                                        <Link to="/airticket"  className="btn btn-sm btn-primary">Go</Link>
                                    </div>
                                </div>

                            </form>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        </div>
                </div>
            </div>

        )
    }
}

