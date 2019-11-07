import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import '../css/uploadStatus.css'
import { _createPost } from '../actions/post'
import { connect } from 'react-redux';


class Post_Layout extends Component {

    state = {
        image: null,
        content: '',
        hashtag: '',
    }
    _onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        // console.log(e.target.id);


    }

    _handleSubmit = () => {
        // console.log(this.state.image);
        // console.log(this.state.content);
        // console.log(this.state);
        let image = this.state.image;
        let content = this.state.content;
        let hashtag = this.state.hashtag


        const { _createPost } = this.props
        _createPost(image, content, hashtag)



    }

    _handleChangeFile = e => {
        this.setState({
            image: e.target.files[0]
        })
    }
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
                                    <textarea
                                        onChange={this._onChange}
                                        value={this.state.content}
                                        id="content"
                                        className="form-control" rows="4" placeholder="Bạn đang nghĩ gì?"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm">
                                <div className="d-flex flex-row">
                                    <button onClick={() => { this.upload.click() }} type="button" className="fas fa-image status-button" title="Chọn ảnh">Ảnh/Images</button>
                                    <input ref={(ref) => this.upload = ref} style={{ display: "none" }} type="file" name="avatar" id="avatar"
                                        onChange={e => this._handleChangeFile(e)}
                                    />
                                    <input
                                        onChange={this._onChange}
                                        value={this.state.hashtag}
                                        id="hashtag"
                                        type="text" class="form-control status-input" placeholder="#Hashtags" />
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
                {
                    this.props.post.listInfoPost.length > 0 &&
                    this.props.post.listInfoPost.map(item => {
                        return (
                            <div className="card shadow-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="row">
                                            <div className="avatar d-flex alignItemsCenter">
                                                <span>Avatar</span>
                                            </div>
                                            <Link className="status-editing">{item.author}</Link>
                                            <div className="wrap">
                                                <Link to='/#'>
                                                    <div
                                                        style={{ height: '50' }}
                                                        className="badge badge-pill badge-info">#{item.hashtag}</div>
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-sm d-flex align-items-center justify-content-end">
                                        {/* <Router>
                                            <Switch>
                                                
                                            </Switch>
                                            <div>
                                                {this.renderRedirect()}
                                                <button onClick={this.setRedirect}>Redirect</button>
                                            </div>
                                        </Router> */}
                                        <Link to="/edit-post"><button className="status-button" style={{ margin: "0" }}>Edit post</button></Link>
                                    </div>
                                </div>
                                <div
                                    className="wrap-content">
                                    <span className="content">{item.content}</span>
                                    <div
                                        className="palette">
                                        <img
                                            style={{ maxWidth: '100%' }}
                                            src={`http://localhost:3000/get_avatar/${item.images[0]}`} />
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
                        )

                    })

                }
                {/* {   
                    this.props.post.infoPost == null &&
                    <div className="card shadow-sm">
                        <div className="row">
                            <div className="col-sm">
                                <div className="row">
                                    <div className="avatar d-flex alignItemsCenter">
                                        <span>Avatar</span>
                                    </div>
                                    <Link className="status-editing">{this.props.post.infoPost.author}</Link>
                                </div>
                            </div>
                            <div className="col-sm d-flex align-items-center justify-content-end">
                                <Link to="/#"><button className="status-button" style={{ margin: "0" }}>Edit post</button></Link>
                            </div>
                        </div>
                        <div
                        className="wrap-content">
                            <span className="content">{this.props.post.infoPost.content}</span>
                            <div
                            className="palette">
                                <img
                                    style={{ maxWidth: '100%' }}
                                    src={`http://localhost:3000/get_avatar/${this.props.post.infoPost.image}`} />
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
                } */}
                {/* <div className="card shadow-sm">
                    <div className="row">
                        <div className="col-sm">
                            <div className="row">
                                <div className="avatar d-flex alignItemsCenter">
                                    <span>Avatar</span>
                                </div>
                                <Link className="status-editing">{this.props.post.infoPost.author}</Link>
                            </div>
                        </div>
                        <div className="col-sm d-flex align-items-center justify-content-end">
                            <Link to="/#"><button className="status-button" style={{ margin: "0" }}>Edit post</button></Link>
                        </div>
                    </div>
                    <div className="wrap-content">
                        <span className="content">{this.props.post.infoPost.content}</span>
                        <div className="palette">
                            <img
                            style={{maxWidth:'100%'}}
                            src={`http://localhost:3000/get_avatar/${this.props.post.infoPost.image}`} />
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
                </div> */}
            </>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    post: state.post

});

export default connect(mapStateToProps, { _createPost })(Post_Layout)
