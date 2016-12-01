import React, { Component } from 'react';
import Header from 'components/Header/index';

require('styles/body.scss');


class App extends Component {
  render() {
    return (
      <div>
        <Header />
         <div className="APP"  >
            {this.props.children}
          </div>
      </div>
    );
  }
}


export default App;