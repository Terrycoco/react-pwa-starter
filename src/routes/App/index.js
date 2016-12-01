import React, { Component } from 'react';
import Header from 'components/Header/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';
require('styles/body.scss');


class App extends Component {
  render() {
    return ( 
    <MuiThemeProvider muiTheme={theme}>
         <div className="APP"  >
            <Header />
            {this.props.children}
          </div>
    </MuiThemeProvider>
    );
  }
}


export default App;