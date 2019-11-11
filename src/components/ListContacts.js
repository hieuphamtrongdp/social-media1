import React, { Component } from 'react';

class ListContacts extends Component {
    render() {
        return (
            <>
                <div className="rounded bg-white box" style={{height:"100%"}}>
                    <div className="rounded bg-white w100 ">
                        {/* START User 1 */}
                        <div className="d-flex align-items-center">
                            <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="avatar" style={{ maxWidth: '100%' }} className="item-avatar web-avatar web-avatar--40 mr-2" />
                            <div className="media-body">
                                <h3 style={{ paddingTop: "5px" }}>Pham Trong Hieu</h3>
                            </div>
                        </div>
                        {/* End User 1 */}
                        {/* START User 2 */}
                        <div className="d-flex align-items-center">
                            <img src="https://cdn1.iconfinder.com/data/icons/avatar-3/512/Manager-512.png" alt="avatar" style={{ maxWidth: '100%' }} className="item-avatar web-avatar web-avatar--40 mr-2" />
                            <div className="media-body">
                                <h3 style={{ paddingTop: "5px" }}>Pham Trong Hieu</h3>
                            </div>
                        </div>
                        {/* End User 2 */}
                    </div>
                </div>
            </>
        );
    }
}

export default ListContacts;