import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/editpost.css';

class editPost extends Component {
    render() {
        return (
            <>
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
                <div className="wrapper wrapperEP">
                    <div className="card cardEP">
                        <div className="card-header card-headerEP">
                            <strong>Chỉnh sửa</strong>
                        </div>
                        <div className="card-body card-bodyEP">
                            <div className="row">
                                <span className="content"><strong>Nội dung</strong></span>
                                <textarea id="content" className="form-control" rows="4" placeholder="Bạn đang nghĩ gì?" cols="12" rows="5"></textarea>
                            </div>
                            <div className="row">
                                <button onClick={() => { this.upload.click() }} type="button" className="fas fa-image status-button" title="Chọn ảnh">Ảnh/Images</button>
                                <input
                                    // onChange={this._onChange}
                                    // value={this.state.hashtag}
                                    // id="hashtag"
                                    type="text" class="form-control status-input" placeholder="#Hashtags" />
                                <Link to="/">
                                    <button className="btn flex-end">Sửa</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default editPost;