import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Header from './header.js';


class LoginPage extends Component {
    /*  constructor() {
          super();
      }*/

    render() {
        return (
            <MuiThemeProvider>
                <Header/>
                <div style={formStyle} >
                    <Card style={logoCardStyle}>
                        <CardMedia
                            image="/logo.png"
                            title="logo"
                            style={logoMediaStyle}
                        />
                    </Card>

                    <Grid container spacing={8} alignItems="flex-end" >
                        <Grid item style={iconStyle}>
                            <AccountCircle />
                        </Grid>
                        <Grid item style={inputStyle}>
                            <TextField fullWidth id="input-with-icon-grid" label="Username" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item style={iconStyle}>
                            <Lock />
                        </Grid>
                        <Grid item style={inputStyle}>
                            <TextField fullWidth type={"password"} id="input-with-icon-grid" label="Password" />
                        </Grid>
                    </Grid>

                    <Button variant="contained" color="primary" style={buttonStyle} >
                        Login
                    </Button>
                    <div style={registerStyle}>
                        Don't have an account? Register!
                    </div>
                </div>
            </MuiThemeProvider>

        );
    }
}

const buttonStyle = {
    width: "100%",
    marginTop: "2em",
    marginBottom: "1em",
    backgroundColor: "#007bff",
};
const inputStyle = {
    width: "18em",
    flex: 1, // to make it responsive with required width
    // maxWidth: "14em",
    marginBottom: "1em",

};
const iconStyle = {
    marginBottom: "1em",
};
const logoCardStyle = {
    height: "6em",
    width: "6em",
    alignContent: "center",
    align: "center",
    marginLeft:"auto",
    marginRight: "auto",
    marginBottom: "2em",

};
const logoMediaStyle = {
    height: "6em",
    width: "6em",
    alignContent: "center",

};
const registerStyle = {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    marginTop: "1em",
    align: "center",
    fontSize: "14px",
    textAlign: "center",
};

const formStyle = {
    width: "auto",
    maxWidth: "320px",
    margin: "4em auto",
    padding: "3em 2em 2em 2em",
    background: "#fafafa",
    border: "1px solid #ebebeb",
    boxShadow: "rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px",
    align: "center",
};
export default LoginPage;