import React from 'react';
import Routes from './components/routes';
import Header from './components/header';

class App extends React.Component {
    render(){
        return(

            <Header />,
            <Routes />

        );
    }
}

export default App;