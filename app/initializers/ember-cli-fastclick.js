import Ember from 'ember';

const { run: { schedule } } = Ember;

let EmberCliFastclickInitializer = {
  name: 'fastclick',

  initialize() {
    	if (typeof FastBoot === 'undefined') {
        schedule('afterRender', function() {
          FastClick.attach(document.body);
        });
      }
  }
};

export default EmberCliFastclickInitializer;
