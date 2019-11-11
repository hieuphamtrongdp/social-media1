import React, { Component } from 'react';

class UserFriend extends Component {
    render() {
        return (
            <>

                <div className="card card-user-profile user-profile-friend container">
                    <div className="rounded bg-white shadow box">
                        <div className="d-flex align-items-center">
                            <h1 className="web-title">Bạn bè</h1>
                        </div>
                        <div></div>
                        <div className="rounded bg-white w100 ">
                            {/* START User 1 */}
                            <div className="d-flex align-items-center">
                                <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="avatar" style={{ maxWidth: '100%' }} className="item-avatar web-avatar web-avatar--40 mr-2" />
                                <div className="media-body">
                                    <h3 style={{ paddingTop: "5px" }}>Pham Trong Hieu</h3>
                                </div>
                                <div className="pending-request">
                                    <button type="button" className="btn btn-success friend-button"><span>Kết bạn</span></button>
                                    <button type="button" className="btn btn-info friend-button"><span>Đang gửi yêu cầu</span></button>
                                </div>
                            </div>
                            {/* End User 1 */}
                            {/* START User 2 */}
                            <div className="d-flex align-items-center">
                                <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="avatar" style={{ maxWidth: '100%' }} className="item-avatar web-avatar web-avatar--40 mr-2" />
                                <div className="media-body">
                                    <h3 style={{ paddingTop: "5px" }}>Pham Trong Hieu</h3>
                                </div>
                                <div className="pending-request">
                                    <button type="button" className="btn btn-success friend-button"><span>Kết bạn</span></button>
                                    <button type="button" className="btn btn-info friend-button"><span>Đang gửi yêu cầu</span></button>
                                </div>
                            </div>
                            {/* End User 2 */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserFriend;