Router.route('/', {
  controller: 'TabsController',
  name: 'contactsShow'
});

Router.route('/find', {
  controller: 'TabsController',
  name: 'find'
});

Router.route('/post', {
  name: 'post'
});

Router.route('/pray', {
  controller: 'TabsController',
  name: 'pray'
});

Router.route('/profile', {
  controller: 'TabsController',
  name: 'profile'
});