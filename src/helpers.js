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
exports.count = function (arr, value) {
    var counter = 0;
    _.forEach(arr, function (el) {
        if (_.isEqual(el, value)) {
            counter++;
        }
    });
    return counter;
};
exports.choice = function (options) {
    return options[_.random(0, options.length - 1)];
};
exports.repeatTo10 = function (arr) {
    var output = arr;
    while (output.length < 10) {
        output = _.concat(output, arr);
    }
    return _.slice(output, 0, 10);
};
exports.addIfUnique = function (element, arr) {
    if (_.every(arr, function (el) { return !_.isEqual(el, element); })) {
        arr.push(element);
    }
};
exports.commVariant = function (variant) {
    return exports.choice([variant, [variant[1], variant[0], variant[2]]]);
};
exports.commUnique = function (variant, variants) {
    if (!_.some(variants, function (vari) { return _.isEqual(vari, variant) || _.isEqual(vari, [variant[1], variant[0], variant[2]]); })) {
        return exports.commVariant(variant);
    }
    else {
        return false;
    }
};
exports.pullFirst = function (arr, value) {
    var index = _.findIndex(arr, function (el) { return _.isEqual(el, value); });
    arr.splice(index, 1);
};
exports.intDiv = function (dividend, divisor) {
    return _.floor(dividend / divisor);
};
