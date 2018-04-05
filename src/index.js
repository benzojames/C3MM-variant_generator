"use strict";
exports.__esModule = true;
var _ = require("lodash");
var helpers_1 = require("./helpers");
var ADD = require("./addition");
var SUB = require("./subtraction");
// import * as SUB from "./subtraction";
console.log("Arrays should be equal: ", _.isEqual([1, 2, 3], [1, 2, 3]));
console.log(helpers_1.count([1, 1, 1], 1));
console.log(ADD.add_10()[0]);
console.log(SUB.SUB1());
/*
require.config({
  paths: {
    'lodash': 'node_modules/lodash/lodash'
  },
  shim: {
    'lodash': {
      exports: '_'
    }
  }
});

require(['helpers', 'addition']), function(help, add) {
  console.log(help.count([1,1,1], 1));
}
*/ 
