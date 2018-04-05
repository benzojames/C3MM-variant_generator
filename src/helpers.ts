import * as _ from "lodash";

export const count = (arr: any[], value: any) => {
  let counter = 0;
  _.forEach(arr, el => { 
    if (_.isEqual(el, value)) {
      counter++;
    }
  });
  return counter;
}

export const choice = (options: any[]) => {
  return options[_.random(0, options.length - 1)];
}

export const repeatTo10 = (arr: any[]) => {
  let output = arr;
  while (output.length < 10) {
    output = _.concat(output, arr);
  }
  return _.slice(output, 0, 10);
}

export const addIfUnique = (element: any, arr: any[]) => {
  if (_.every(arr, el => !_.isEqual(el, element))) {
    arr.push(element);
  }
}

export const commVariant = (variant) => {
  return choice([variant, [variant[1], variant[0], variant[2]]])
}
export const commUnique = (variant: number[], variants: number[][]) => {
  if (!_.some(variants, vari => _.isEqual(vari, variant) || _.isEqual(vari, [variant[1], variant[0], variant[2]]))) {
    return commVariant(variant);
  }
  else {
    return false;
  }
}

export const myFind = (arr, value) => {
  return _.findIndex(arr, el => _.isEqual(el, value));
}

export const pullFirst = (arr: any[], value) => {
  arr.splice(myFind(arr, value), 1);
}

export const intDiv = (dividend: number, divisor: number) => {
  return _.floor(dividend / divisor);
}

export const nArrComp = (arr: number[], fn: Function) => {
  return _.reduce(arr, (acc, el) => {
    acc.push(fn(el));
    return acc;
  }, [] as number[]);
}