import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/uploadStatus.css'

class Post_Layout extends Component {

    render() {
        return (
            <>
                <div className="card shadow-sm rounded">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs" >
                            <li className="nav-item">
                                <span className="fas  nav-link active">Tạo bài viết</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <div className="tab-content">
                            <div className="d-flex flex-row tab-pane fade show active ">
                                <div className="avatar">avatar</div>
                                <div className="form-group">
                                    <textarea className="form-control" rows="4" placeholder="Bạn đang nghĩ gì?"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <div className="d-flex flex-row">
                                    <button type="button" className="fas fa-image status-button" title="Chọn ảnh">Ảnh/Images</button>
                                    <input type="text" class="form-control status-input" placeholder="#Hashtags" />
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="d-flex flex-row-reverse">
                                    <button className="btn btn-danger btn-sm" style={{ backgroundColor: "#26A69A" }} onClick={e => this._handleSubmit(e)} name="submit" type="button" >Đăng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card shadow-sm">
                    <div className="row">
                        <div className="col-sm">
                            <div className="row">
                                <div className="avatar d-flex alignItemsCenter">
                                    <span>Avatar</span>
                                </div>
                                <Link className="status-editing">Còn đây là tên</Link>
                            </div>
                        </div>
                        <div className="col-sm d-flex align-items-center justify-content-end">
                            <Link to="/#"><button className="status-button" style={{ margin: "0" }}>Edit post</button></Link>
                        </div>
                    </div>
                    <div className="wrap-content">
                        <span className="content">Hello World!!!</span>
                        <div className="palette">
                            <div className="first"></div>
                            <div className="second"></div>
                            <div className="third"></div>
                            <div className="fourth"></div>
                        </div>
                        <div className="row">
                            <div className="col-sm d-flex justify-content-center">
                                <button className="fas fa-heart status-button"></button>
                            </div>
                            <div className="col-sm d-flex justify-content-center">
                                <button className="fas status-button">Bình luận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Post_Layout;