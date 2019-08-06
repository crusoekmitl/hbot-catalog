
import React from "react";
import './pagebody.css';
import ConnectCatalogComponent from './../../module/connect-catalog/connect-catalog'
import CatalogListComponent from './../../module/catalog-list/catalog-list'

export default class PagebodyComponent extends React.Component {
  render() {
    return (
      <div className="body" >
        <ConnectCatalogComponent />
        <CatalogListComponent/>
      </div>
    );
  }
}
