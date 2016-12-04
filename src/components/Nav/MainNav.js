//MainNav
import React from 'react';
import DrawerLeft from './DrawerLeft';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationOpen from 'material-ui/svg-icons/navigation/chevron-left';
import routes from 'routes/routes';

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }


  //open/close drawer
  toggleDrawer() {
    this.setState({
      open: !this.state.open
    });
  }


  render() {
    return(
     <div>
       <AppBar      title="React PWA Starter"
                    onTouchTap={this.toggleDrawer.bind(this)}
                    iconElementLeft={<IconButton><NavigationOpen /></IconButton>}
                     />
       <DrawerLeft  open={this.state.open}
                    onToggleDrawer={this.toggleDrawer.bind(this)} />
     </div>
    );
  }
}




export default MainNav;

 


