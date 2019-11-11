import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import { Route, Link } from "react-router-dom";
import UserFriend from '../components/UserFriend';
import ListContacts from '../components/ListContacts';
import '../css/userprofile.css';

class UserProfile extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="profile-content">
                                Some user related content goes here...
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-content-center">
                            <div className="card card-user-profile text-center rounded bg-white shadow mb-4 container">
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
                                            <div className="nav-link font-weight-semi-bold" style={{ cursor: "pointer" }}>Dòng thời gian</div>
                                        </li>
                                        <li className="nav-item">
                                            <div className="nav-link font-weight-semi-bold" style={{ cursor: "pointer" }}>Giới thiệu</div>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/user-profile/friend-list">
                                                <div className="nav-link font-weight-semi-bold" style={{ cursor: "pointer" }}>Bạn bè</div>
                                            </Link>
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

                            <Route path={'/user-profile/friend-list'} component={UserFriend} />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <div className="card card-user-profile shadow-sm container">
                                <ListContacts />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserProfile;