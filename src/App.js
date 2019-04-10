
import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "./component/common_home.component.js"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import HotelList from "./component/hotel-list-component";
import MapComponent from "./component/map-component";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Home<span
                                                className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Ticketing<span
                                                className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item active">
                                            <Link to = "/map" className = 'nav-link' > Map </Link>
                                        </li>
                                    </ul>
                                    <form className="form-inline my-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                               aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                        </button>
                                    </form>
                                </div>
                            </div>


                        </nav>
                    </div>
                    <Route path = "/listHotel" component = {HotelList} />
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path = "/map" component = {MapComponent}/>
                </div>
            </Router>

        );
    }
}

export default App;