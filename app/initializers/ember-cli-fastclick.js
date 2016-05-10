import Ember from 'ember';

const { run: { schedule } } = Ember;

let EmberCliFastclickInitializer = {
  name: 'fastclick',

  initialize() {
    schedule('afterRender', function() {
      FastClick.attach(document.body);
    });
  }
};

export default EmberCliFastclickInitializer;
