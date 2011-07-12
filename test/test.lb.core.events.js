/*
 * test.lb.core.events.js - Unit Tests of lb.core.events namespace
 *
 * Author:    Eric Bréchemier <legalbox@eric.brechemier.name>
 * Copyright: Legal-Box (c) 2010-2011, All Rights Reserved
 * License:   BSD License - http://creativecommons.org/licenses/BSD/
 * Version:   2011-06-30
 *
 * Based on Test Runner from bezen.org JavaScript library
 * CC-BY: Eric Bréchemier - http://bezen.org/javascript/
 */

/*jslint white:false, onevar:false, plusplus:false */
/*global define, window, lb */
define(
  [
    "bezen.org/bezen.assert",
    "bezen.org/bezen.object",
    "bezen.org/bezen.testrunner",
    "lb/lb.core.events"
  ],
  function(
    assert,
    object,
    testrunner,
    events
  ){

    function testNamespace(){

      assert.isTrue( object.exists(events),
                                  "events module not found in dependencies");

      if ( object.exists(window) ) {
        assert.isTrue( object.exists(window,'lb','core','events'),
                                   "lb.core.events namespace was not found");
        assert.equals( events, lb.core.events,
          "same module expected in lb.core.events for backward compatibility");
      }
    }

    var tests = {
      testNamespace: testNamespace
    };

    testrunner.define(tests, "lb.core.events");
    return tests;
  }
);
