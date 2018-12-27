import { schedule } from '@ember/runloop';
import { get } from '@ember/object';
import { debug } from '@ember/debug';

export function initialize(application) {
  const config = application.resolveRegistration('config:environment');
  const autoboot = get(config, 'fastclick.autoboot') !== false;

  if (typeof FastBoot === 'undefined' && autoboot !== false) {
    schedule('afterRender', function() {
      FastClick.attach('body');
      debug('FastClick attached to body');
    });
  }
}

export default {
  initialize
};
