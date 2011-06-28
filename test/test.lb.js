/*
 * test.lb.js - Unit Tests of lb root namespace
 *
 * Authors:
 *   o Eric Bréchemier <legalbox@eric.brechemier.name>
 *   o Marc Delhommeau <marc.delhommeau@legalbox.com>
 * Copyright: Legal-Box (c) 2010-2011, All Rights Reserved
 * License:   BSD License - http://creativecommons.org/licenses/BSD/
 * Version:   2011-06-28
 *
 * Based on Test Runner from bezen.org JavaScript library
 * CC-BY: Eric Bréchemier - http://bezen.org/javascript/
 */

/*jslint white:false, onevar:false, plusplus:false */
/*global window, define, require */
define(
  [
    "bezen.org/bezen.assert",
    "bezen.org/bezen.object",
    "bezen.org/bezen.testrunner",
    "lb/lb"
  ],
  function(
    assert,
    object,
    testrunner,
    lb
  ) {
  // Builder of
  // Closure object for Test of namespace lb

  function testNamespace(){

    assert.isTrue( object.exists(lb),      "lb was not found in dependencies");

    if ( object.exists(window) ) {
      assert.isTrue( object.exists(window,'lb'),
                                       "lb namespace was not found in window");
    }
  }

  var tests = {
    testNamespace: testNamespace
  };

  testrunner.define(tests, "lb");
  return tests;

});
