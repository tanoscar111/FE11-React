import React from 'react';

import './main.css';
import Siderbar from './Siderbar';
import List from './List'
function Main() {
    return (
        <div className="main">
            <div className="container-fluid">
                <div class="row">
                    <div className="col-md-6 sider">
                        <Siderbar />
                    </div>
                    <div className="col-md-6">
                        <h3>List Item</h3>
                        <List/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
