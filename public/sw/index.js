console.log('got here');

//first time install
self.addEventListener('install', event => {
  console.log('sw installed');
});

//on fetches
self.addEventListener('fetch', event => {
  console.log('fetch intercept');
});