import React from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  render() {
    return (
      <AppBar
        title="React PWA" 
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default Header;




// import React, { Component } from 'react';
// require('./header.scss');

// class Header extends Component {
//   render() {
//     return (
//      <header className="header">
//         <h1 className="header__title">React PWA</h1>
//         <button id="butRefresh" className="headerButton"></button>
//         <button id="butAdd" className="headerButton"></button>
//      </header>
//     );
// }

// }
// export default Header;


