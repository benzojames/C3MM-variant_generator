"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const _ = __importStar(require("lodash"));
exports.count = (arr, value) => {
    let counter = 0;
    _.forEach(arr, el => {
        if (_.isEqual(el, value)) {
            counter++;
        }
    });
    return counter;
};
exports.choice = (options) => {
    return options[_.random(0, options.length - 1)];
};
exports.repeatTo10 = (arr) => {
    let output = arr;
    while (output.length < 10) {
        output = _.concat(output, arr);
    }
    return _.slice(output, 0, 10);
};
exports.addIfUnique = (element, arr) => {
    if (_.every(arr, el => !_.isEqual(el, element))) {
        arr.push(element);
    }
};
exports.commVariant = (variant) => {
    return exports.choice([variant, [variant[1], variant[0], variant[2]]]);
};
exports.commUnique = (variant, variants) => {
    if (!_.some(variants, vari => _.isEqual(vari, variant) || _.isEqual(vari, [variant[1], variant[0], variant[2]]))) {
        return exports.commVariant(variant);
    }
    else {
        return false;
    }
};
exports.pullFirst = (arr, value) => {
    let index = _.findIndex(arr, el => _.isEqual(el, value));
    arr.splice(index, 1);
};
exports.intDiv = (dividend, divisor) => {
    return _.floor(dividend / divisor);
};
