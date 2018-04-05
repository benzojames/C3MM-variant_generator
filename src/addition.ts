import * as _ from "lodash";
import { repeatTo10, choice, commUnique, pullFirst, intDiv, commVariant } from "./helpers";

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

export const add_1 = () => {
  const augends = _.range(10);
  const addends = _.reduce(augends, (acc, val) => {
    acc.push(10 - val);
    return acc;
  }, [] as number[]);
  const sums = repeatTo10([10]);

  let variants = _.zip(augends, addends, sums);
  variants = _.shuffle(variants);

  return [variants, "AB"];
}

export const add_2 = () => {
  let variants: number[][] = [];
  let augend: number, addend, variant;

  let zeros = 2;
  let ones = 2;

  const possibleAugends = _.range(21);

  while (variants.length !== 10) {
    augend = choice(possibleAugends);
    addend = choice(_.filter(possibleAugends, (aug) => {
      return _.inRange(aug, Math.max(11 - augend, Math.min(...possibleAugends)), 20 - augend);
    }));
    variant = [augend, addend, augend + addend];
    
    if (commUnique(variant, variants)) {
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
}

export const add_3 = () => {
  let variants: number[][] = [];
  let zeros = 2;
  let floor = 0;

  while (variants.length !== 10) {
    let addend1 = 10 * _.random(2, 9);
    let addend2 = choice([_.random(floor, 9), 10 * _.random(1, 10 - addend1 / 10)]);
    let sum  = addend1 + addend2;

    let possiblyComm = commUnique([addend1, addend2, sum], variants);
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
}

export const add_4 = () => {
  let variants: number[][] = [];
  let addend1, addend1Tens, addend1Ones, addend2, addend2Tens, addend2Ones;
  let addend2s;

  let addend1OnesOptions = _.concat(_.range(1, 9), _.range(1, 9));
  while (variants.length !== 10) {
    addend1Tens = _.random(2, 9);
    addend1Ones = choice(addend1OnesOptions);
    addend1 = 10 * addend1Tens + addend1Ones;

    if (addend1Ones === 1) {
      pullFirst(addend1OnesOptions, 1);
    }

    addend2s = _.filter(addend1OnesOptions, op => _.inRange(op, 1, 9 - addend1Ones));
    if (!_.isEmpty(addend2s)) {
      addend2 = choice(addend2s);
    }
    else {
      continue;
    }

    if (addend2 === 1) {
      pullFirst(addend1OnesOptions, 1);
    }

    let possiblyComm = commUnique([addend1, addend2, addend1 + addend2], variants);
    if (possiblyComm) {
      variants.push(possiblyComm);
    }
  }
  variants = _.shuffle(variants);

  return [variants, "ABC"];
}

export const add_5 = () => {
  let variants: number[][] = [];
  let addend1, addend2, sum;

  while (variants.length !== 10) {
    addend1 = _.random(2, 9);
    addend2 = 10 * _.random(1, 8) + _.random(11 - addend1, 9);
    sum = addend1 + addend2;

    let possiblyComm = commUnique([addend1, addend2, sum], variants);
    if (possiblyComm && _.inRange(sum, 20, 100) && sum % 10 !== 0) {
      variants.push(possiblyComm);
    }
  }
  return [variants, "ABC"];
}

export const add_6 = () => {
  let variants: number[][] = [];
  let zeros = 2;
  let addend1, addend2, sum;

  while (variants.length !== 10) {
    addend1 = 10 * _.random(1, 9) + _.random(1, 9);
    addend2 = 10 * _.random(1, 9 - intDiv(addend1, 10));

    if (!zeros) {
      addend2 += _.random(1, 10 - intDiv(addend1, 10));
    }

    sum = addend1 + addend2;

    let possiblyComm = commUnique([addend1, addend2, sum], variants);
    if (possiblyComm && _.inRange(sum, 20, 100)) {
      variants.push(possiblyComm);
      if (addend2 % 10 === 0) {
        zeros--;
      }
    } 
  }
  variants = _.shuffle(variants);
  return [variants, "ABC"];
}

export const add_7 = () => {
  let variants: number[][] = [];
  let augend, addend, sum;
  let augendOnes;
  let variant;

  while (variants.length !== 10) {
    augendOnes = _.random(2, 9);
    augend = 10 * _.random(1, 7) + augendOnes;
    addend = 10 * _.random(1, 8 - intDiv(augend, 10)) + _.random(11 - augendOnes, 9);
    sum = augend + addend;

    variant = [augend, addend, sum];
    if (commUnique(variant, variants) && _.inRange(sum, 30, 200)) {
      variants.push(variant);
    }
  }
  return [variants, "ABC"];
}

export const add_8 = () => {
  let variants: number[][] = [];
  let addend1, addend2, sum;
  let possiblyComm;
  let variant;

  addend1 = 100 * _.random(1, 9);
  addend2 = _.random(1, 9);
  variant = [addend1, addend2, addend1 + addend2];
  variants.push(commVariant(variant));

  while (variants.length < 2) {
    let hunMult = 100 * _.random(1, 9);
    let underTen = _.random(1, 9);

    possiblyComm = commUnique([hunMult, underTen, hunMult + underTen], variants);
    if (possiblyComm) {
      variants.push(possiblyComm);
    }
  }

  while (variants.length !== 10) {
    addend1 = choice([10, 100]) * _.random(1, 9);
    addend2 = choice([10, 100]) * _.random(1, 9);
    if (addend2 < 100) {
      addend2 += _.random(0, 9);
    }
    sum = addend1 + addend2;

    possiblyComm = commUnique([addend1, addend2, sum], variants);
    if (possiblyComm && _.inRange(sum, 100, 1000)) {
      variants.push(possiblyComm);
    }
  }
  variants = _.shuffle(variants);
  return [variants, "C"];
}

const add_9Types = (vType: number) => {
  let addend1;
  let addend2;
  switch (vType) {
    case 1:
      addend1 = 100 * _.random(1, 8) + 10 * _.random(1, 9);
      addend2 = 100 * _.random(1, 9 - intDiv(addend1, 100)) + (10 - addend1 % 10);
      break;
    case 2:
      addend1 = 100 * _.random(1, 8);
      addend2 = 100 * _.random(1, 9 - intDiv(addend1, 100)) + (10 * _.random(1, 9));
      break;
    case 3:
      addend1 = 100 * _.random(1, 8) + 10 * _.random(1, 9);
      addend2 = 100 * _.random(1, 9 - intDiv(addend1, 100)) + 10 * _.random(1, 9);
      break;
  }
  return [addend1, addend2, addend1 + addend2];
}
export const add_9 = () => {
  let variants: number[][] = [];
  let variant;
  let possiblyComm;

  while (variants.length < 3) {
    variant = add_9Types(1);
    possiblyComm = commUnique(variant, variants);
    if (possiblyComm && variant[2]  % 100 === 0 && _.inRange(variant[2], 200, 1000)) {
      variants.push(variant);
    }
  }
  while (variants.length < 6) {
    variant = add_9Types(2);
    possiblyComm = commUnique(variant, variants);
    if (possiblyComm && _.inRange(variant[2], 200, 1000)) {
      variants.push(variant);
    }
  }
  while (variants.length < 9) {
    variant = add_9Types(3);
    possiblyComm = commUnique(variant, variants);
    if (possiblyComm && _.inRange(variant[2], 200, 1000)) {
      variants.push(variant);
    }
  }

  let variantsCopy = variants.slice();
  variants = _.shuffle(variants);
  while (variants.length !== 10) {
    // last should be same type as first
    variant = add_9Types(intDiv(_.findIndex(variantsCopy, vari => _.isEqual(vari, variants[0])), 3) + 1);
    possiblyComm = commUnique(variant, variants);
    if (possiblyComm && _.inRange(variant[2], 200, 1000)) {
      variants.push(variant);
    }
  }
  return [variants, "ABC"]
}

export const add_10 = () => {
  let variants: number[][] = [];
  let onceHundred = 2;
  let hCrossover = 2;
  let tCrossover = 2;
  let bothCrossover = 3;
  let hunMult1, tenMult1, hunMult2, tenMult2;
  let addend1, addend2, sum;
  let possiblyComm;

  while (onceHundred) {
    hunMult1 = _.random(2, 9);
    tenMult1 = _.random(2, 9);
    hunMult2 = 0;
    tenMult2 = _.random(11 - tenMult1, 9);
    addend1 = 100 * hunMult1 + 10 * tenMult1;
    addend2 = 100 * hunMult2 + 10 * tenMult2;
    sum = addend1 + addend2;

    possiblyComm = commUnique([addend1, addend2, sum], variants);
    if (possiblyComm && _.inRange(300, 2000)) {
      variants.push(possiblyComm);
      onceHundred--;
    }
  }
  while (bothCrossover) {
    hunMult1 = _.random(2, 9);
    tenMult1 = _.random(2, 9);
    hunMult2 = _.random(11 - hunMult1, 9);
    tenMult2 = _.random(11 - tenMult1, 9);
    addend1 = 100 * hunMult1 + 10 * tenMult1;
    addend2 = 100 * hunMult2 + 10 * tenMult2;
    sum = addend1 + addend2;

    possiblyComm = commUnique([addend1, addend2, sum], variants);
    if (possiblyComm && _.inRange(sum, 300, 2000)) {
      variants.push(possiblyComm);
      bothCrossover--;
    }
  }
  while (hCrossover) {
    hunMult1 = _.random(2, 9);
    tenMult1 = _.random(1, 8);
    hunMult2 = _.random(11 - hunMult1, 9);
    tenMult2 = _.random(1, 9 - tenMult1);
    addend1 = 100 * hunMult1 + 10 * tenMult1;
    addend2 = 100 * hunMult2 + 10 * tenMult2;
    sum = addend1 + addend2;

    possiblyComm = commUnique([addend1, addend2, sum], variants);
    if (possiblyComm && _.inRange(sum, 300, 2000)) {
      variants.push(possiblyComm);
      hCrossover--;
    }
  }
  while (tCrossover) {
    hunMult1 = _.random(1, 8);
    tenMult1 = _.random(2, 9);
    hunMult2 = _.random(1, 9 - hunMult1);
    tenMult2 = _.random(11 - tenMult1, 9);
    addend1 = 100 * hunMult1 + 10 * tenMult1;
    addend2 = 100 * hunMult2 + 10 * tenMult2;
    sum = addend1 + addend2;

    possiblyComm = commUnique([addend1, addend2, sum], variants);
    if (possiblyComm && _.inRange(sum, 300, 1000)) {
      variants.push([addend1, addend2, sum]);
      tCrossover--;
    }
  }
  while (variants.length !== 10) {
    if (choice([true, false])) {
      // 10 crossover
      hunMult1 = _.random(1, 8);
      tenMult1 = _.random(2, 9);
      hunMult2 = _.random(1, 9 - hunMult1);
      tenMult2 = _.random(11 - tenMult1, 9);
      addend1 = 100 * hunMult1 + 10 * tenMult1;
      addend2 = 100 * hunMult2 + 10 * tenMult2;
      sum = addend1 + addend2;

      possiblyComm = commUnique([addend1, addend2, sum], variants);
      if (possiblyComm && _.inRange(sum, 200, 1000)) {
          variants.push(possiblyComm);
      }
    }
    else {
        // 100 crossover
        hunMult1 = _.random(2, 9);
        tenMult1 = _.random(1, 8);
        hunMult2 = _.random(11 - hunMult1, 9);
        tenMult2 = _.random(1, 9 - tenMult1);
        addend1 = 100 * hunMult1 + 10 * tenMult1;
        addend2 = 100 * hunMult2 + 10 * tenMult2;
        sum = addend1 + addend2;

        possiblyComm = commUnique([addend1, addend2, sum], variants);
        if (possiblyComm && _.inRange(sum, 200, 2000)) {
            variants.push(possiblyComm);
        }
    }
  }
 
  variants = _.shuffle(variants);
  return [variants, "ABC"];
}


const add_1Checks = () => {
  return null;
}