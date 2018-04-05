"use strict";
exports.__esModule = true;
var _ = require("lodash");
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
exports.myFind = function (arr, value) {
    return _.findIndex(arr, function (el) { return _.isEqual(el, value); });
};
exports.pullFirst = function (arr, value) {
    arr.splice(exports.myFind(arr, value), 1);
};
exports.intDiv = function (dividend, divisor) {
    return _.floor(dividend / divisor);
};
exports.nArrComp = function (arr, fn) {
    return _.reduce(arr, function (acc, el) {
        acc.push(fn(el));
        return acc;
    }, []);
};
