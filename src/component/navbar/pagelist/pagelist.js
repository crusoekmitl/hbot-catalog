
import React from "react";
import './pagelist.css'
import PageHeaderComponent from './../../module/page-header/page-header'
import ConnectComponent from './../../module/connect/connect'
import ListPageComponent from './../../module/listpage/listpage'
import TapOutComponent from './../../../component/module/tapout/tapout'

export default class PagelistComponent extends React.Component {
  render() {
    return (
      <div className="bodymenu">
        <div className="bodymenu-list">
          <PageHeaderComponent />
          <ConnectComponent />
          <ListPageComponent />
          <TapOutComponent/>
        </div>
      </div>
    );
  }
}
