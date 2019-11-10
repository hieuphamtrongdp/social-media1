import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/userprofile.css';
import logo from '../assets/image/logo.png'

class UserProfile extends Component {
    render() {
        return (
            <>
                <header className="header">
                    <div className="d-flex align-items-center">
                        <Link to="/" className="header-brand mr-3">
                            <img src={logo} height="30" alt="Đồ án" className="header-logo" />
                        </Link>

                        <div className="vertical-line-nav"></div>

                        <ul className="header-nav header-nav--main d-flex align-items-center list-unstyled ml-auto hide_mobile">
                            <li>
                                <Link to="/">
                                    <i className="far fa-home active"/>
                                </Link>
                                
                            </li>
                            <li>
                                <Link to="/">
                                <i className="fad fa-user-friends"/>
                                </Link>
                            </li>
                            <li>
                                <a href="#">Tin nhắn</a>
                            </li>
                            <li>
                                <a href="#">Thông báo</a>
                            </li>
                            <li>
                                <a href="#">Cài đặt</a>
                            </li>
                            <li><button className="btn btn-default btn_logout" onClick={() => this._handleLogout()}>Đăng xuất</button></li>
                        </ul>
                    </div>
                </header>
                <nav className="ul-style">

                    <div style={{ float: "right", marginRight: "20px" }}>
                        <input id="search-user" placeholder="search" type="text" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="profile-content">
                                Some user related content goes here...
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-content-center">
                            <div className="card shadow">
                                <div className="head-cover rounded-top position-relative" style={{ backgroundImage: 'url("https://www.w3schools.com/css/img_5terre_wide.jpg")' }}>
                                    <div className="head-avatar rounded-circle">
                                        <img className="avatar" src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg" alt="avatar" />
                                    </div>
                                </div>
                                <div className="head-content">
                                    <h1 className="user-name font-weight-semi-bold">Pham Trong Hieu</h1>
                                </div>
                                <div className="head-nav d-flex px-3">
                                    <ul className="nav mr-auto">
                                        <li className="nav-item">
                                            <div className="nav-link active font-weight-semi-bold" style={{ cursor: "pointer" }}>Dòng thời gian</div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link font-weight-semi-bold" style={{ cursor: "pointer" }}>Giới thiệu</div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link font-weight-semi-bold" style={{ cursor: "pointer" }}>Bạn bè</div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link font-weight-semi-bold" style={{ cursor: "pointer" }}>Ảnh</div>
                                        </li>
                                    </ul>
                                    <div className="dropdown">

                                    </div>
                                    <div className="d-flex align-items-center align-items-start">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="profile-content">
                                Some user related content goes here...
                            </div>
                            {/* <span className="fas fa-home"/> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserProfile;