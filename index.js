'use strict';

module.exports = {
  name: 'ember-cli-fastclick',

  included(app) {
    this._super.included(app);
    app.import('node_modules/fastclick/lib/fastclick.js');
  }
};
