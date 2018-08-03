import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

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


          <div className="form" >
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                      <AccountCircle />
                  </Grid>
                  <Grid item>
                      <TextField id="input-with-icon-grid" label="Username" />
                  </Grid>
              </Grid>
              <Grid container spacing={8} alignItems="flex-end">
                  <Grid item>
                      <Lock />
                  </Grid>
                  <Grid item>
                      <TextField id="input-with-icon-grid" label="Password" />
                  </Grid>
              </Grid>
          </div>
      </MuiThemeProvider>

  );
  }
}
const styles = {
    navBar: {'top': AppBar.height}
}
export default App;
