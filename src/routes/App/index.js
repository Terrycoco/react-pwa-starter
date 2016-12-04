import React, { Component } from 'react';
import MainNav from 'components/Nav/MainNav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'styles/theme';

//app-wide style
require('styles/body.scss');


class App extends Component {

  render() {
    return ( 
    <MuiThemeProvider muiTheme={theme}>
     <div className="APP"  >
        <MainNav  />
        {this.props.children}
      </div>
    </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    drawerOpen: state.app.drawerOpen
  };
}


export default App;