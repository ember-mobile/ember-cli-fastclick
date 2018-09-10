import { schedule } from '@ember/runloop';

export function initialize() {
  schedule('afterRender', function() {
    FastClick.attach('body');
  });
}

export default {
  initialize
};
