//home is front-loaded
import App from 'routes/App';
import Home from 'routes/Home';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  return (module) => cb(null, module.default);
}

export default {
  component: App,
  childRoutes: [
   {
      path: '/',
      component: Home
   },
   {
      path: '/about',
      getComponent(location, cb) {
        System.import('routes/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
   }
  ]
};