
import React from "react";
import './connect.css'
import Button from '@material-ui/core/Button';

const styles = {
        border: '1px solid #ffffff',
        color: '#ffffff',
        backgroudColor: 'transparent',
  };

const SERVER_URL = "https://hedbotecommerce.herokuapp.com"
export default class ConnectComponent extends React.Component {
    render() {
        // const classes = useStyles();
        return (
            <div class="tap-con">
                <div class="tap-con-in">
                    <div class="div-connect">
                        <p class="text-con">CONNECT</p>
                    </div>
                    <div class="div-btn-discon">
                        <Button style={styles} >
                            {/* <a href={`${SERVER_URL}/api/login-fb`}>connect fb</a> */}
                            <p class="text-dis">Disconnect</p>
                        </Button>
                    </div>
                </div>
                
            </div>
        );
    }
}
