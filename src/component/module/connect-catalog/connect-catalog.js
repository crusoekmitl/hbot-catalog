
import React from "react";
import './connect-catalog.css'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import axios from 'axios'

export default class ConnectCatalogComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            number : '',
            data : [],
            name : '',
            loading : false
        }
        this.numberId = this.numberId.bind(this)
        this.getId = this.getId.bind(this)
    }

    numberId(e){
        this.setState({
            number : e.target.value
        })
    }

    getId(){
        var number = this.state.number

        if(number==''){alert('error null'); return;}
        axios.post('https://hedbotecommerce.herokuapp.com/api/catalogs', {
            "idBusiness": number
        })
          .then( (response) => {
                // console.log(response.data.owned_product_catalogs.data[1])
                this.setState({
                    name : response.data.owned_product_catalogs.data[1].name,
                    data : response.data.owned_product_catalogs.data[1].products.data,
                    loading : true
                })
                // console.log(this.state.name)
                // console.log(this.state.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {

        let list_data = []
        this.state.data.map((val, i) => {
           return list_data.push(<div key={i}>
                    <div>
                        <div>
                            {val.name}
                        </div>
                        <div>
                        {val.category}
                        </div>
                    </div>
                    <div>
                        <div> {val.image_url}</div>
                        <div> {val.id}</div>
                    </div>  
                    <br />
                </div>)
            
        })
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
                     {
                         this.state.loading == true? list_data : ''
                     }

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
