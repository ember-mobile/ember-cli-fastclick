/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-fastclick',
  included: function(app) {
    this._super.included(app);
    
    app.import(app.bowerDirectory + '/fastclick/lib/fastclick.js');
  }
};
