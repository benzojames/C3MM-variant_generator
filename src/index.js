"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var helpers_1 = require("./helpers");
var ADD = __importStar(require("./addition"));
console.log("Arrays should eb equal: ", _.isEqual([1, 2, 3], [1, 2, 3]));
console.log(helpers_1.count([1, 1, 1], 1));
console.log(ADD.add_8()[0]);
