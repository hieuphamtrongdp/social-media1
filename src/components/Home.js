import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _logout } from '../actions/user'
import { _updateAvatar } from '../actions/user'
import { Link } from 'react-router-dom';
import '../css/home.css'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Post_Layout from '../components/post'
import Overview from '../components/Overview'

class Home extends Component {

    state = {
        avatar: null
    }

    _handleLogout = () => {
        const { _logout, history } = this.props;
        _logout(history);


    }
    _handleChangeFile = e => {
        this.setState({
            avatar: e.target.files[0]
        })


    }
    _handleSubmit = e => {
        // e.preventDefault();
        const { avatar } = this.state
        const { _updateAvatar } = this.props
        _updateAvatar(avatar);

        // _updateAvatar(this.state.avatar)

    }

    render() {
        const photoURL = this.props.user.infoUser.url
            ? `https://socialnetwork113.herokuapp.com/get_avatar/${this.props.user.infoUser.url}`
            : `https://socialnetwork113.herokuapp.com/get_avatar/default.png`
        // const photoURL = this.props.user.infoUser.url
        //     ? `http://localhost:3000/get_avatar/${this.props.user.infoUser.url}`
        //     : `http://localhost:3000/get_avatar/default.png`
        return (
            <div>

                <div className="header__content">
                    <nav className="ul-style">
                        <ul >
                            <li className="active"><a href="#">Trang chủ</a></li>
                            <li><a href="#">Lời mời kết bạn</a></li>
                            <li><a href="#">Tin nhắn</a></li>
                            <li><a href="#">Thông báo</a></li>
                            <li><a href="#">Cài đặt</a></li>
                            <li><button className="btn btn-default btn_logout" onClick={() => this._handleLogout()}>Đăng xuất</button></li>


                        </ul>
                        <div style={{ float: "right", marginRight: "20px" }}>
                            <input id="search-user" placeholder="search" type="text" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>

                    </nav>
                </div>




                <div className="container-fluid">
                    <div className="row profile">
                        <div className="col-md-3">
                            <Overview/>
                            
                        </div>

                        <div className="col-md-6">
                                <Post_Layout/>
                        </div>

                        <div className="col-md-3">
                            <div className="profile-content">
                                Some user related content goes here...
                            </div>
                        </div>

                    </div>
                </div>

            </div>



        )
    }
}

const mapStateToProps = state => ({
    user: state.user



});
export default connect(mapStateToProps, { _logout, _updateAvatar })(Home);