
import App from 'routes/App';
import Home from 'routes/Home';
import About from 'routes/About';

const rootRoute = {
   path: '/',
   component: App,
   indexRoute: { component: Home },
   childRoutes: [
    {
      path: '/',
      component: Home,
      title: 'Home'
    },

    { path: '/about',
      component: About,
      title: 'About'
    }
   ]
};
   
export default rootRoute;