import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './img/image.jpg'
import logo from './img/logomain.png'


var sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "none"
};

class App extends Component {
  render() {
    return (
        <div style={ sectionStyle } className="jumbotron">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="google.com" target="_blank">
                    <img src={logo} width="100%" height="100%" alt="google.com"/>
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Ticketing<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Lodging<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
                        </li>


                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            </div>
        </div>
    );
  }
}

export default App;
