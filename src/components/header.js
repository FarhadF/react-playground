import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class Header extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        console.log("toggle menu is called", this.state.menuOpen);
        if (this.state.menuOpen === false) {
            this.setState({menuOpen: true});
        } else {
            this.setState({menuOpen: false});
        }
    }

    render() {
        return (
            <MuiThemeProvider>

                <div>
                    <AppBar
                        title={"Login"}
                        onTitleClick={this.toggleMenu}
                        titleStyle={appbarStyle.hover}
                        onLeftIconButtonClick={this.toggleMenu}
                        style={appbarStyle}
                        iconElementLeft={<img src="/logo.png" alt="Logo" width={"40em"} height={"40em"} />}
                        iconStyleLeft={appbarIconStyle}
                    />
                    <Drawer
                        open={this.state.menuOpen}
                        containerStyle={styles.navBar}>
                        <MenuItem>Menu Item 1</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>

        );
    }
}
const styles = {
    navBar: {
        'top': AppBar.height,
        'width': "50%",
        'max-width': "200px",

    }
};
const appbarStyle = {
    backgroundColor: "#007bff",
    cursor: "default",
};
const appbarIconStyle = {
    marginTop: ".8em",
};
export default Header;
