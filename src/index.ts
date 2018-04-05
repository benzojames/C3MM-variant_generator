import * as _ from "lodash";
import { count, commUnique, pullFirst } from "./helpers";
import * as ADD from "./addition";

console.log("Arrays should eb equal: ", _.isEqual([1,2,3],[1,2,3]));
console.log(count([1,1,1],1));
console.log(ADD.add_8()[0]);
