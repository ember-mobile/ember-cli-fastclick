import Ember from 'ember';

var EmberCliFastclickInitializer = {
  name: 'fastclick',

  initialize: function() {
    Ember.run.schedule('afterRender', function() {
      FastClick.attach(document.body);
    });
  }
}

export default EmberCliFastclickInitializer;
