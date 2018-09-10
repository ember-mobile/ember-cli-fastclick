import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    logClick() {
      window.console.log('Clicked');
    }
  }
})
