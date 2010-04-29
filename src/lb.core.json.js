/*
 * Namespace: lb.core.json
 * JSON (JavaScript Object Notation) Application Core Module
 *
 * Author:
 * Eric Bréchemier <legalbox@eric.brechemier.name>
 *
 * Copyright:
 * Legal Box (c) 2010, All Rights Reserved
 *
 * Version:
 * 2010-04-29
 */
/*requires closure/goog.json.js */
/*requires lb.core.js */
/*jslint nomen:false, white:false, onevar:false, plusplus:false */
/*global lb, goog */
// preserve the module, if already loaded
lb.core.json = lb.core.json || (function() {
  // Builder of
  // Closure for lb.core.json module

  // Declare alias
  var json = goog.json;

  function parse(string){
    // Function: parse(string): object|array
    // Parse a JSON string into corresponding object or array.
    //
    // Parameter:
    //   string - string, a JSON string
    //
    // Returns:
    //   object|array, the object or array resulting from parsing

    //
    return json.parse(string);
  }

  function serialize(object){
    // Function: serialize(object): string
    // Serialize a JSON object or array into a JSON string.
    //
    // Parameter:
    //   object - object|array, a JavaScript object or array.
    //            No function should be present in properties of a provided
    //            object or any object within.
    //
    // Returns:
    //   string, a string resulting from serialization of given object or array
    // (end)

    //
    return json.serialize(object);
  }

  return { // public API
    parse: parse,
    serialize: serialize
  };
}());
