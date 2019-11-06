import React, { Component } from 'react';
import { connect } from 'react-redux';
import { _logout } from '../actions/user'
import { _updateAvatar } from '../actions/user'
import { Link } from 'react-router-dom';
import '../css/home.css'

class Overview extends Component {
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
    }

    render() {
        const photoURL = this.props.user.infoUser.url
            ? `https://socialnetwork113.herokuapp.com/get_avatar/${this.props.user.infoUser.url}`
            : `https://socialnetwork113.herokuapp.com/get_avatar/default.png`
        return (
            <>
                
                <div className="profile-sidebar shadow-sm rounded">

             <div className="profile-userpic">

                        <img src={photoURL} className="img-fluid shadow-sm circle" onClick={() => { this.upload.click() }} alt="" />

                    </div>

                    <input ref={(ref) => this.upload = ref} style={{ display: "none" }} type="file" name="avatar" id="avatar"
                        onChange={e => this._handleChangeFile(e)}
                    />


                    <div className="profile-usertitle">
                        <div className="profile-usertitle-name">
                            {this.props.user.username.fullname}
                        </div>
                        <div className="profile-usertitle-job">
                            Developer
                        </div>
                    </div>

                    <div className="profile-userbuttons">
                        <button className="btn btn-danger btn-sm" style={{ backgroundColor: "#D9534F" }} onClick={e => this._handleSubmit(e)} name="submit"    type="button" >Change Avatar</button>
                        <button className="btn btn-danger btn-sm" style={{ backgroundColor: "#5cb85c" }} type="button" >Message</button>
                    </div>

                    <div className="profile-usermenu">
                        <ul>
                            <li className="active">
                                <Link>
                                    <i className="fas fa-home" />
                                    Overview
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <i className="fas fa-mobile-alt disabled" />
                                    {this.props.user.infoUser.phone}
                                </Link>

                            </li>
                            <li>
                                <Link>
                                    <i className="far fa-heart disabled" />
                                    {this.props.user.infoUser.birthday}
                                </Link>
                            </li>

                            <li>
                                <Link to="/update_info">
                                    <i className="fas fa-cog" />
                                    <strong>Update Profile</strong>
                                </Link>
                            </li>
                            <li>
                                <Link to="/update_password">
                                    <i className="fas fa-cog" />
                                    <strong>Update Password</strong>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default connect(mapStateToProps, { _logout, _updateAvatar })(Overview);