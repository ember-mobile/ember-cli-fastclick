/* jshint node: true */
'use strict';

var path = require('path');
var broccoliFunnel = require('broccoli-funnel');
var broccoliMergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-fastclick',

  isEnabled: function() {
    return !process.env.EMBER_CLI_FASTBOOT;
  },

  included: function(app) {
    this._super.included(app);
    app.import(this.treePaths.vendor + '/fastclick/fastclick.js');
  },

  treeForVendor: function(vendorTree) {
    var trees = [];
    if (vendorTree) {
      trees.push(vendorTree);
    }
    var libPath = path.dirname(require.resolve('fastclick'));
    trees.push(new broccoliFunnel(libPath, {
      destDir: 'fastclick',
      include: ['*']
    }));
    return broccoliMergeTrees(trees);
  }
};
