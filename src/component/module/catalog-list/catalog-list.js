
import React from "react";
import './catalog-list.css'
import Button from "@material-ui/core/Button"
var iconhead = require('./../../../assets/logo/logo.svg');
export default class CatalogListComponent extends React.Component {
    render() {
        // const classes = useStyles();
        return (
            <div class="tap-catalog">
                <div class="tap-catalog-box">
                    <div class="catalog-head">
                        <div class="tap-catalog-list">
                            catalog list
                        </div>
                        <div class="tap-catalog-product">
                           <div> product </div>
                        </div>
                    </div>
                    <div class="catalog-head">
                        <div class="tap-catalog-list" >type</div>
                        <div class="tap-catalog-product">
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div><div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                            <div class="catalog-box">
                                <div class="catalog-img-box">
                                    <img  src={iconhead} class="catalog-img" />
                                </div>
                                <div class="catalog-text">
                                    <p>text</p>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div class="tap-catalog-button">
                        <Button
                            style={{margin: "15px auto",backgroundColor: "#26a69b",color: "#ffffff" }}
                            onClick={() => {
                                console.log('click')
                            }}
                            variant="contained"
                        > Submit</Button>
                    </div>
                </div>
            </div>
        );
    }
}
