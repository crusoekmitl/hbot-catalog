
import React from "react";
import './catalog-list.css'
import Button from "@material-ui/core/Button"

export default class CatalogListComponent extends React.Component {
    render() {
        // const classes = useStyles();
        return (
            <div class="tap-catalog">
                <div class="tap-catalog-box">
                    <div>
                        <div>
                            catalog list
                        </div>
                        <div>
                            product
                        </div>
                    </div>
                    <div>
                        <div>type</div>
                        <div>product list </div>
                    </div>
                    <div class="tap-catalog-button">
                        <Button
                            style={{     margin: "15px auto" }}
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
