import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/chevron-right';
import { Link, browserHistory } from 'react-router';
import rootRoute from 'routes/routes';



class DrawerLeft extends Component {
  constructor(props) {
    super(props);
  }

  handleRouteChange(route) {
    browserHistory.push(route);
    this.props.onToggleDrawer();
  }

  render() {
    const renderRoutes = () => {
      return rootRoute.childRoutes.map(route => {
         return  <MenuItem primaryText={route.title} 
                           onTouchTap={this.handleRouteChange.bind(this, route.path)} 
                           />
      });  
    };

    return (
      <Drawer open={this.props.open} >
          <AppBar title="Menu"
                  showMenuIconButton={false}
                  onTouchTap={this.props.onToggleDrawer} 
                  iconElementRight={<IconButton><NavigationClose /></IconButton>}
          />
          {renderRoutes()}
      </Drawer>
    );
  }
}
export default DrawerLeft;