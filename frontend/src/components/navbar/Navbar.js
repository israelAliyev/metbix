import React, {Component} from 'react';
import '../../css/navbar.css';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchType: "All"
        }
    }


    render() {

        return (

            <div>

                {/*Main Navbar*/}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        {/*Site logo on Navigation bar */}
                        <a className="navbar-brand " href="#">
                            <img className="img img-fluid " src="/images/logo.png"/>
                        </a>

                        {/*Toglle button for responsive design*/}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        {/*colapse items for responsive design*/}
                        <div className="collapse navbar-collapse" id="navbarNav">


                            <ul className="navbar-nav mb-2 mb-lg-0">

                                {/*Login and register form on navbar */}
                                <li className="nav-item me-3 mt-1">
                                    <div className="dropdown navbar-account-dropdown">

                                        <div className="d-flex flex-column text-white"
                                             id="dropdownMenuButtonAccountTypes"
                                             data-bs-toggle="dropdown"
                                             aria-expanded="false">
                                            <span className="navbar-account-mymetbix-text">My Metbix</span>
                                            <span className="navbar-account-account-types-text">Account Types <span><i
                                                className="fas fa-caret-down"/></span> </span>
                                        </div>

                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButtonAccountTypes">
                                            <li><a className="dropdown-item">User</a></li>
                                            <li><a className="dropdown-item">Company</a></li>
                                        </ul>
                                    </div>
                                </li>

                                {/*search form that hase a drop search types down and yellow button*/}
                                <div className="navbar-search-form">

                                    <li className="nav-item navbar-search-form-group">
                                        <form className="form-inline mt-1 navbar-for-search-form-border">
                                            <div className="input-group">

                                                <button
                                                    className=" navbar-search-form-dropdown btn btn-silver dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton2" data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    {this.state.searchType}
                                                </button>
                                                <ul className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton2">
                                                    <li onClick={() => {
                                                        this.setState({searchType: "All"})
                                                    }}><a className="dropdown-item ">All</a></li>
                                                    <li onClick={() => {
                                                        this.setState({searchType: "Products"})
                                                    }}><a className="dropdown-item">Products</a></li>
                                                    <li onClick={() => {
                                                        this.setState({searchType: "Users"})
                                                    }}><a className="dropdown-item">Users</a></li>
                                                    <li onClick={() => {
                                                        this.setState({searchType: "Companies"})
                                                    }}><a className="dropdown-item">Companies</a></li>
                                                </ul>


                                                <input autoComplete="off" type="text" name="query" id="query"
                                                       className="navbar-search-form-text-form form-control"/>

                                                <button className="btn btn-warning navbar-search-form-button"
                                                        type="button"
                                                        id="button-addon1">
                                                    <img width="23" src="/images/loupe.png"/>
                                                </button>

                                            </div>

                                        </form>
                                    </li>

                                </div>


                                {/*changing currency 0f products and selecting laguages*/}

                                <li className="nav-item ms-3 mt-2-5">

                                    <div className="dropdown navbar-languages-currency">

                                        <div className="d-flex text-white mt-0 mt-2"
                                             id="dropdownMenuButtonLanguagesAndCurrency"
                                             data-bs-toggle="dropdown"
                                             aria-expanded="false">
                                        <span><img width="23" src="/images/aze.png"/> <span> - AZN </span>
                                            <span><i className="fas fa-caret-down"/></span></span>
                                        </div>

                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButtonLanguagesAndCurrency">
                                            <h6 className=" text-center">Languages</h6>
                                            <li>
                                                <li className="dropdown-submenu">
                                                    <a className="dropdown-item" tabindex="-1" href="#"><img width="23"
                                                                                                             src="/images/aze.png"/> Azerbaijan</a>
                                                    <ul className="dropdown-menu">

                                                        <li className="dropdown-item">
                                                            <input type="text" placeholder="Search language.."/>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider"/>
                                                        </li>
                                                        <div className="for-overflow-dropdown-items">

                                                            <li className="dropdown-item"><img width="23"
                                                                                               src="/images/aze.png"/> Second
                                                                level
                                                            </li>

                                                        </div>
                                                    </ul>
                                                </li>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <h6 className="text-center">Currency</h6>
                                            <li>
                                                <li className="dropdown-submenu">
                                                    <a className="dropdown-item" tabindex="-1" href="#">AZN</a>
                                                    <ul className="dropdown-menu">
                                                        <li className="dropdown-item">
                                                            <input type="text" placeholder="Search currency.."/>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider"/>
                                                        </li>
                                                        <div className="for-overflow-dropdown-items">

                                                        <li className="dropdown-item">AZN</li>
                                                        <li className="dropdown-item">USD</li>
                                                        <li className="dropdown-item">ER</li>
                                                        </div>
                                                    </ul>
                                                </li>
                                            </li>
                                        </ul>
                                    </div>

                                </li>


                                {/*User's country or */}
                                <li className="nav-item ms-3 mt-1 navbar-location-country">
                                    <div className="dropdown">
                                        <div className="d-flex text-white" id="dropdownMenuButtonCountries"
                                             data-bs-toggle="dropdown"
                                             aria-expanded="false">
                                            <img src="/images/location.png" className="img-fluid"/>
                                            <div className="d-flex flex-column">
                                                <span className="fs-7 text-secondary">Deliver To:</span>
                                                <span className="fw-bold navbar-location-country-name">Azerbaijan <span><i
                                                    className="fas fa-caret-down"/></span> </span>
                                            </div>
                                        </div>

                                        <ul className="dropdown-menu dropdown-menu-end"
                                            aria-labelledby="dropdownMenuButtonCountries">
                                            <li><a className="dropdown-item">Azerbaijan</a></li>
                                            <li><a className="dropdown-item">Turkey</a></li>
                                            <li><a className="dropdown-item">East Turkestan</a></li>
                                        </ul>
                                    </div>
                                </li>

                                {/*notification with animation and count of messages*/}
                                <li className="nav-item ms-4 navbar-notification">
                                    <div className="wrapper">
                                        <div className="bell">
                                            <div className="anchor material-icons layer-1">
                                                notifications_active
                                            </div>
                                            <div className="anchor material-icons layer-2">
                                                notifications
                                            </div>
                                            <div className="anchor material-icons layer-3">
                                                notifications
                                            </div>
                                            <span>99</span>
                                        </div>
                                    </div>
                                </li>


                                {/*Shopping cart or basket */}
                                <li className="nav-item ms-4-5 navbar-basket">
                                    <img width="46" src="/images/shopping-basket2.png" className="img-fluid"/>
                                    <span>99</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <nav className="navbar sub-navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#SubnavbarNav" aria-controls="SubnavbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <div className="collapse navbar-collapse" id="SubnavbarNav">
                            <ul className="navbar-nav mb-2 mb-lg-0">

                                <li className="nav-item me-3 mt-1 d-flex justify-content-center align-items-center">
                                    <img width="29" src="/images/menu.png" alt=""/>
                                    <a href="" className="nav-link">Departments</a>
                                </li>

                                <li className="nav-item me-3 mt-1 d-flex justify-content-center align-items-center">
                                    <img width="39" src="/images/box1.png" alt=""/>
                                    <a href="" className="nav-link">Sell on Metbix</a>
                                </li>

                                <li className="nav-item me-3 mt-1 d-flex justify-content-center align-items-center">
                                    <img width="34" src="/images/statistics.png" alt=""/>
                                    <a href="" className="nav-link">Finance</a>
                                </li>

                                <li className="nav-item me-3 mt-1 d-flex justify-content-center align-items-center" >
                                    <img width="34" src="/images/question.png" alt=""/>
                                    <a href="" className="nav-link">Help</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>

            </div>
        );
    }
}

export default Navbar;