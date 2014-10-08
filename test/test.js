/*global describe,it*/
'use strict';
var assert = require('assert'),
  unarchive = require('../lib/unarchive.js');

describe('unarchive node module.', function() {
  it('must be awesome', function() {
    assert( unarchive.awesome(), 'awesome');
  });
});
