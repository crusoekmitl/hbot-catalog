
import React from "react";
import './page-header.css'
var iconhead = require('./../../../assets/logo/iconhead.svg');
export default class PageHeaderComponent extends React.Component {

    render() {
        return (
            <div class="tap">
                <div class="tap-icon-left">
                    <img  src={iconhead} class="iconhead" />
                </div>
                <div class="">
                    <div>
                        <p class="text-fb">Facebook</p>
                    </div>
                    <div>
                        <p class="text-cate">Catagory</p>
                    </div>
                </div>
            </div>
        );
    }
}
