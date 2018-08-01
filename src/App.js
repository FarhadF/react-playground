import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
          menuOpen: false,
      }
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
    //var hello = <h1>hello world</h1>;
    return (
      <MuiThemeProvider>
          <div>
          <AppBar
          title={"Login"}
          onLeftIconButtonClick={this.toggleMenu}
          />
              <Drawer
              open={this.state.menuOpen}
              containerStyle={styles.navBar}>
                  <MenuItem>Menu Item 1</MenuItem>
                  <MenuItem>Menu Item 2</MenuItem>
              </Drawer>
          </div>
      </MuiThemeProvider>,
        < div className = "input" >
          < label htmlFor = "pass" > Password < /label>
      <input type="password" name="pass" id="pass">
          <span className="spin"></span>
      </div>
    );
  }
}
const styles = {
    navBar: {'top': AppBar.height}
}
export default App;
