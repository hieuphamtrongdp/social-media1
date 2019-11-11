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
            : `https://i.imgur.com/xedRnbw.png`
        return (
            <>
                
                <div className="profile-sidebar shadow-sm rounded">
                    <div className="head-avatar rounded-circle" style={{position:"relative"}}>
                        <img className="avatar" src={photoURL} alt="avatar" />
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
                        <button className="btn" style={{ backgroundColor: "#D9534F", color:"white" }} onClick={e => this._handleSubmit(e)} name="submit" type="button" >Change Avatar</button>
                        <button className="btn" style={{ backgroundColor: "#5cb85c", color:"white" }} type="button" >Message</button>
                    </div>

                    <div className="profile-usermenu">
                        <ul>
                            <li className="active">
                                <Link>
                                    <i className="fas fa-home" />
                                    <strong>Overview</strong>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <i className="fas fa-mobile-alt disabled" />
                                    <strong>{this.props.user.infoUser.phone}</strong>
                                </Link>

                            </li>
                            <li>
                                <Link>
                                    <i className="far fa-heart disabled" />
                                    <strong>{this.props.user.infoUser.birthday}</strong>
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
                            <li>
                                <Link to="/user-profile">
                                    <i className="fas fa-user" />
                                    <strong>Cá nhân</strong>
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