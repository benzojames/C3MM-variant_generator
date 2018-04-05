
import * as _ from "lodash";
import { count, commUnique, pullFirst } from "./helpers";
import * as ADD from "./addition";
import * as SUB from "./subtraction";
// import * as SUB from "./subtraction";

console.log("Arrays should be equal: ", _.isEqual([1,2,3],[1,2,3]));
console.log(count([1,1,1],1));
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