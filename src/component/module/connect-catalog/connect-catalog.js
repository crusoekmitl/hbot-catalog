
import React from "react";
import './connect-catalog.css'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
export default class ConnectCatalogComponent extends React.Component {
    
    render() {
        return (
            <div class="tap-catalog-border">
                <div class="tap-catalog-head">
                    <div>
                        <p> Connect </p>
                    </div>
                    <div class="tap-input-connect">
                            <TextField
                                id="outlined-name"
                                label="Business ID"
                                value=""
                                onChange={e =>
                                    console.log('test',e)
                                }
                                style={{ backgroundColor: "#ffffff" }}
                                variant="outlined"
                            />
                            <Button
                                style={{ height: "100%" , margin: "auto 20px",backgroundColor: "#26a69b",color: "#ffffff" }}
                                onClick={() => {
                                    console.log('click')
                                }}
                                variant="contained"
                            >
                                Plug
                            </Button>
                    </div>
                </div>
            </div>
            
        );
    }
}
