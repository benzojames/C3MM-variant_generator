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
var Variant = /** @class */ (function () {
    function Variant() {
    }
    return Variant;
}());
var Variants = /** @class */ (function () {
    function Variants() {
    }
    return Variants;
}());
exports.add_1 = function () {
    var augends = _.range(10);
    var addends = _.reduce(augends, function (acc, val) {
        acc.push(10 - val);
        return acc;
    }, []);
    var sums = helpers_1.repeatTo10([10]);
    var variants = _.zip(augends, addends, sums);
    variants = _.shuffle(variants);
    return [variants, "AB"];
};
exports.add_2 = function () {
    var variants = [];
    var augend, addend, variant;
    var zeros = 2;
    var ones = 2;
    var possibleAugends = _.range(21);
    while (variants.length !== 10) {
        augend = helpers_1.choice(possibleAugends);
        addend = helpers_1.choice(_.filter(possibleAugends, function (aug) {
            return _.inRange(aug, Math.max(11 - augend, Math.min.apply(Math, possibleAugends)), 20 - augend);
        }));
        variant = [augend, addend, augend + addend];
        if (helpers_1.commUnique(variant, variants)) {
            variants.push(variant);
            if (_.includes([augend, addend], 0)) {
                zeros--;
                if (zeros < 1) {
                    _.pull(possibleAugends, 0, 20);
                }
            }
            if (_.includes([augend, addend], 1)) {
                ones--;
                if (ones < 1) {
                    _.pull(possibleAugends, 1, 19);
                }
            }
        }
    }
    variants = _.shuffle(variants);
    return [variants, "ABC"];
};
exports.add_3 = function () {
    var variants = [];
    var zeros = 2;
    var floor = 0;
    while (variants.length !== 10) {
        var addend1 = 10 * _.random(2, 9);
        var addend2 = helpers_1.choice([_.random(floor, 9), 10 * _.random(1, 10 - addend1 / 10)]);
        var sum = addend1 + addend2;
        var possiblyComm = helpers_1.commUnique([addend1, addend2, sum], variants);
        if (possiblyComm && _.inRange(sum, 20, 100)) {
            variants.push(possiblyComm);
            if (addend2 === 0) {
                zeros--;
                if (zeros < 1) {
                    floor = 1;
                }
            }
        }
    }
    variants = _.shuffle(variants);
    return [variants, "ABC"];
};
exports.add_4 = function () {
    var variants = [];
    var addend1, addend1Tens, addend1Ones, addend2, addend2Tens, addend2Ones;
    var addend2s;
    var addend1OnesOptions = _.concat(_.range(1, 9), _.range(1, 9));
    while (variants.length !== 10) {
        addend1Tens = _.random(2, 9);
        addend1Ones = helpers_1.choice(addend1OnesOptions);
        addend1 = 10 * addend1Tens + addend1Ones;
        if (addend1Ones === 1) {
            helpers_1.pullFirst(addend1OnesOptions, 1);
        }
        addend2s = _.filter(addend1OnesOptions, function (op) { return _.inRange(op, 1, 9 - addend1Ones); });
        if (!_.isEmpty(addend2s)) {
            addend2 = helpers_1.choice(addend2s);
        }
        else {
            continue;
        }
        if (addend2 === 1) {
            helpers_1.pullFirst(addend1OnesOptions, 1);
        }
        var possiblyComm = helpers_1.commUnique([addend1, addend2, addend1 + addend2], variants);
        if (possiblyComm) {
            variants.push(possiblyComm);
        }
    }
    variants = _.shuffle(variants);
    return [variants, "ABC"];
};
exports.add_5 = function () {
    var variants = [];
    var addend1, addend2, sum;
    while (variants.length !== 10) {
        addend1 = _.random(2, 9);
        addend2 = 10 * _.random(1, 8) + _.random(11 - addend1, 9);
        sum = addend1 + addend2;
        var possiblyComm = helpers_1.commUnique([addend1, addend2, sum], variants);
        if (possiblyComm && _.inRange(sum, 20, 100) && sum % 10 !== 0) {
            variants.push(possiblyComm);
        }
    }
    return [variants, "ABC"];
};
exports.add_6 = function () {
    var variants = [];
    var zeros = 2;
    var addend1, addend2, sum;
    while (variants.length !== 10) {
        addend1 = 10 * _.random(1, 9) + _.random(1, 9);
        addend2 = 10 * _.random(1, 9 - helpers_1.intDiv(addend1, 10));
        if (!zeros) {
            addend2 += _.random(1, 10 - helpers_1.intDiv(addend1, 10));
        }
        sum = addend1 + addend2;
        var possiblyComm = helpers_1.commUnique([addend1, addend2, sum], variants);
        if (possiblyComm && _.inRange(sum, 20, 100)) {
            variants.push(possiblyComm);
            if (addend2 % 10 === 0) {
                zeros--;
            }
        }
    }
    variants = _.shuffle(variants);
    return [variants, "ABC"];
};
exports.add_7 = function () {
    var variants = [];
    var augend, addend, sum;
    var augendOnes;
    var variant;
    while (variants.length !== 10) {
        augendOnes = _.random(2, 9);
        augend = 10 * _.random(1, 7) + augendOnes;
        addend = 10 * _.random(1, 8 - helpers_1.intDiv(augend, 10)) + _.random(11 - augendOnes, 9);
        sum = augend + addend;
        variant = [augend, addend, sum];
        if (helpers_1.commUnique(variant, variants) && _.inRange(sum, 30, 200)) {
            variants.push(variant);
        }
    }
    return [variants, "ABC"];
};
exports.add_8 = function () {
    var variants = [];
    var addend1, addend2, sum;
    var possiblyComm;
    var variant;
    addend1 = 100 * _.random(1, 9);
    addend2 = _.random(1, 9);
    variant = [addend1, addend2, addend1 + addend2];
    variants.push(helpers_1.commVariant(variant));
    while (variants.length < 2) {
        var hunMult = 100 * _.random(1, 9);
        var underTen = _.random(1, 9);
        possiblyComm = helpers_1.commUnique([hunMult, underTen, hunMult + underTen], variants);
        if (possiblyComm) {
            variants.push(possiblyComm);
        }
    }
    while (variants.length !== 10) {
        addend1 = helpers_1.choice([10, 100]) * _.random(1, 9);
        addend2 = helpers_1.choice([10, 100]) * _.random(1, 9);
        if (addend2 < 100) {
            addend2 += _.random(0, 9);
        }
        sum = addend1 + addend2;
        possiblyComm = helpers_1.commUnique([addend1, addend2, sum], variants);
        if (possiblyComm && _.inRange(sum, 100, 1000)) {
            variants.push(possiblyComm);
        }
    }
    variants = _.shuffle(variants);
    return [variants, "C"];
};
var add_9Types = function (vType) {
    var addend1;
    var addend2;
    switch (vType) {
        case 1:
            addend1 = 100 * _.random(1, 8) + 10 * _.random(1, 9);
            addend2 = 100 * _.random(1, 9 - helpers_1.intDiv(addend1, 100)) + (10 - addend1 % 10);
            break;
        case 2:
            addend1 = 100 * _.random(1, 8);
            addend2 = 100 * _.random(1, 9 - helpers_1.intDiv(addend1, 100)) + (10 * _.random(1, 9));
            break;
        case 3:
            addend1 = 100 * _.random(1, 8) + 10 * _.random(1, 9);
            addend2 = 100 * _.random(1, 9 - helpers_1.intDiv(addend1, 100)) + 10 * _.random(1, 9);
            break;
    }
    return [addend1, addend2, addend1 + addend2];
};
exports.add_9 = function () {
    var variants = [];
    var variant;
    var possiblyComm;
    while (variants.length < 3) {
        variant = add_9Types(1);
        possiblyComm = helpers_1.commUnique(variant, variants);
        if (possiblyComm && variant[2] % 100 === 0 && _.inRange(variant[2], 200, 1000)) {
            variants.push(variant);
        }
    }
    while (variants.length < 6) {
        variant = add_9Types(2);
        possiblyComm = helpers_1.commUnique(variant, variants);
        if (possiblyComm && _.inRange(variant[2], 200, 1000)) {
            variants.push(variant);
        }
    }
    while (variants.length < 9) {
        variant = add_9Types(3);
        possiblyComm = helpers_1.commUnique(variant, variants);
        if (possiblyComm && _.inRange(variant[2], 200, 1000)) {
            variants.push(variant);
        }
    }
};
exports.add_10 = function () { };
var add_1Checks = function () {
    return null;
};
