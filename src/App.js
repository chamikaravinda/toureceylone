
import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "./component/common_home.component.js"
import AirTicketing from "./component/air_ticketing.component.js"
import TravelDestination from "./component/travel_destinations.component.js"
import WildLifeDestination from "./component/destinations_wildLife.component";
import SelectCountry from "./component/select_country.component"
import HotelList from "./component/hotel-list-component";
import SandyBeaches from "./component/sandy_beaches.component";
import logo from "./img/logoUn.png";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="google.com" target="_blank">
                                <img src={logo} width="82" height="64" alt="google.com"/>
                            </a>
                            <div className="container">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to="/listHotel" className="nav-link">Hotel</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to="/airticket" className="nav-link">Ticketing</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to="/destinations" className="nav-link">Destinations</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <Link to="/selectcountry" className="nav-link">Select Country</Link>
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
                    <Route path="/" exact component={HomeComponent}/>
                    <Route path="/airticket" component={AirTicketing}/>
                    <Route path="/destinations" component={TravelDestination}/>
                    <Route path="/wildlife" component={WildLifeDestination}/>
                    <Route path="/selectcountry" component={SelectCountry}/>
                    <Route path="/listHotel" component={HotelList}/>
                    <Route path="/beaches" component={SandyBeaches}/>
                </div>
            </Router>

        );
    }
}

export default App;