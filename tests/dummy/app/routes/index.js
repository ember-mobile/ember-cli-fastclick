import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logClick() {
      window.console.log('Clicked');
    }
  }
});
