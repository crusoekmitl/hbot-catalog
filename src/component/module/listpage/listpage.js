
import React from "react";
import './listpage.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    margin: 10,
};

export default class ListPageComponent extends React.Component {
    render() {
        const data =[{"name":"test1"},{"name":"test2"}];
        const listItems = data.map((d) => 
            <ListItem style={{border: "1px solid #fff",borderRadius: "10px",margin:"10px 0px"}} button >
                <ListItemIcon>
                    <Avatar alt="icon" src="https://icon-library.net//images/facebook-icon-url/facebook-icon-url-23.jpg"  style={styles}  />
                </ListItemIcon>
                <ListItemText primary="Sent mail" style={{ color: "#ffffff" }} />
            </ListItem>
        );

        return (
            <div class="tap-list">
               {listItems }
            {/* <ListItem button>
                <ListItemIcon>
                    <Avatar alt="icon" src="./../../../assets/logo/logo.svg"  style={styles}  />
                </ListItemIcon>
                <ListItemText primary="Sent mail" />
            </ListItem> */}
            </div>
        );
    }
}
