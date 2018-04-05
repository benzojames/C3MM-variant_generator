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
const helpers_1 = require("./helpers");
/*
class Variant {
  left: number;
  right: number;
  result: number;

  leftFrom?: number[];
  rightFrom?: number[];
  
  zeros?: number;
  ones?: number;

  possiblyCommuted?: boolean;

  nullIndex: string;

  constructor () {
  }
}

class Variants {
  leftFrom?: number[];
  rightFrom?: number[];

  zeros?: number[];
  ones?: number[];

  constructor() {
  }

  addVariant: (variant: Variant) => {
    
  }
}
*/
exports.add_1 = () => {
    const augends = _.range(10);
    const addends = _.reduce(augends, (acc, val) => {
        acc.push(10 - val);
        return acc;
    }, []);
    const sums = helpers_1.repeatTo10([10]);
    let variants = _.zip(augends, addends, sums);
    variants = _.shuffle(variants);
    return [variants, "AB"];
};
exports.add_2 = () => {
    let variants = [];
    let augend, addend, variant;
    let zeros = 2;
    let ones = 2;
    const possibleAugends = _.range(21);
    while (variants.length !== 10) {
        augend = helpers_1.choice(possibleAugends);
        addend = helpers_1.choice(_.filter(possibleAugends, (aug) => {
            return _.inRange(aug, Math.max(11 - augend, Math.min(...possibleAugends)), 20 - augend);
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
exports.add_3 = () => {
    let variants = [];
    let zeros = 2;
    let floor = 0;
    while (variants.length !== 10) {
        let addend1 = 10 * _.random(2, 9);
        let addend2 = helpers_1.choice([_.random(floor, 9), 10 * _.random(1, 10 - addend1 / 10)]);
        let sum = addend1 + addend2;
        let possiblyComm = helpers_1.commUnique([addend1, addend2, sum], variants);
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
exports.add_4 = () => {
    let variants = [];
    let addend1, addend1Tens, addend1Ones, addend2, addend2Tens, addend2Ones;
    let addend2s;
    let addend1OnesOptions = _.concat(_.range(1, 9), _.range(1, 9));
    while (variants.length !== 10) {
        addend1Tens = _.random(2, 9);
        addend1Ones = helpers_1.choice(addend1OnesOptions);
        addend1 = 10 * addend1Tens + addend1Ones;
        if (addend1Ones === 1) {
            helpers_1.pullFirst(addend1OnesOptions, 1);
        }
        addend2s = _.filter(addend1OnesOptions, op => _.inRange(op, 1, 9 - addend1Ones));
        if (!_.isEmpty(addend2s)) {
            addend2 = helpers_1.choice(addend2s);
        }
        else {
            continue;
        }
        if (addend2 === 1) {
            helpers_1.pullFirst(addend1OnesOptions, 1);
        }
        let possiblyComm = helpers_1.commUnique([addend1, addend2, addend1 + addend2], variants);
        if (possiblyComm) {
            variants.push(possiblyComm);
        }
    }
    variants = _.shuffle(variants);
    return [variants, "ABC"];
};
exports.add_5 = () => {
    let variants = [];
    let addend1, addend2, sum;
    while (variants.length !== 10) {
        addend1 = _.random(2, 9);
        addend2 = 10 * _.random(1, 8) + _.random(11 - addend1, 9);
        sum = addend1 + addend2;
        let possiblyComm = helpers_1.commUnique([addend1, addend2, sum], variants);
        if (possiblyComm && _.inRange(sum, 20, 100) && sum % 10 !== 0) {
            variants.push(possiblyComm);
        }
    }
    return [variants, "ABC"];
};
exports.add_6 = () => {
    let variants = [];
    let zeros = 2;
    let addend1, addend2, sum;
    while (variants.length !== 10) {
        addend1 = 10 * _.random(1, 9) + _.random(1, 9);
        addend2 = 10 * _.random(1, 9 - helpers_1.intDiv(addend1, 10));
        if (!zeros) {
            addend2 += _.random(1, 10 - helpers_1.intDiv(addend1, 10));
        }
        sum = addend1 + addend2;
        let possiblyComm = helpers_1.commUnique([addend1, addend2, sum], variants);
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
exports.add_7 = () => {
    let variants = [];
    let augend, addend, sum;
    let augendOnes;
    let variant;
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
exports.add_8 = () => {
    let variants = [];
    let addend1, addend2, sum;
    let possiblyComm;
    let variant;
    addend1 = 100 * _.random(1, 9);
    addend2 = _.random(1, 9);
    variant = [addend1, addend2, addend1 + addend2];
    variants.push(helpers_1.commVariant(variant));
    while (variants.length < 2) {
        let hunMult = 100 * _.random(1, 9);
        let underTen = _.random(1, 9);
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
const add_9Types = (vType) => {
    let addend1;
    let addend2;
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
exports.add_9 = () => {
    let variants = [];
    let variant;
    let possiblyComm;
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
exports.add_10 = () => { };
const add_1Checks = () => {
    return null;
};
