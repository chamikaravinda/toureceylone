import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "./component/common_home.component.js"
import AirTicketing from "./component/air_ticketing.component.js"
import TravelDestination from "./component/travel_destinations.component.js"
import SelectCountry from "./component/select_country.component"



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
                                            <Link to="/" className="nav-link">Home</Link>
                                        </li>

                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Hotel<span
                                                className="sr-only">(current)</span></a>
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
                    <Route path="/selectcountry" component={SelectCountry}/>
                </div>
            </Router>

        );
    }
}

export default App;
