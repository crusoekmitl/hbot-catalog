
import React from "react";
import './connect-catalog.css'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import axios from 'axios'

export default class ConnectCatalogComponent extends React.Component {

    constructor(){
        super()
        this.state = {
            number : ''
        }
        this.numberId = this.numberId.bind(this)
    }

    numberId(e){
        this.setState({
            number : e.target.value
        })
    }

    getId(){
        console.log(this.state.number)
        
    }

    render() {
        return (
            <div>
            <div class="tap-catalog-border">
                <div class="tap-catalog-head">
                    <div>
                        <p> Connect </p>
                    </div>
                    <div class="tap-input-connect">
                            <TextField
                                id="outlined-name"
                                label="Business Id"
                                value={this.state.number}
                                onChange={this.numberId }
                                variant="outlined"
                            />
                            <Button
                                style={{ height: "100%" , margin: "auto 20px"}}
                                onClick={() => this.getId() }
                                variant="contained"
                            >
                                Plug
                            </Button>
                    </div>
                </div>
            </div>
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
         </div>
            
        );
    }
}
