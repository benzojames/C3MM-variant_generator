"use strict";
exports.__esModule = true;
var _ = require("lodash");
var helpers_1 = require("./helpers");
exports.SUB1 = function () {
    var variants = [];
    var CZeros = 2;
    _.forEach(_.range(10), function (subr) {
        while (true) {
            var minu = _.random(subr + (CZeros ? 0 : 1), 10);
            // avoid [0, 0, 0]
            if (minu === 0) {
                continue;
            }
            var difference = minu - subr;
            if (difference === 0) {
                CZeros--;
            }
            var variant = [minu, subr, difference];
            // avoid repitition
            if (helpers_1.myFind(variants, variant) < 0) {
                variants.push([minu, subr, difference]);
                break;
            }
        }
    });
    variants = _.shuffle(variants);
    // let b0, c0 = 0, 0;
    // for _, b, c in variants:
    //     if (b === 0 { b0++;
    //     if (c === 0 { c0++;
    // if (b0 > 2 { console.log('s1 too many b = 0')
    // if (c0 > 2 { console.log('s1 c0')
    return [variants, 'ABC'];
};
/*

export const SUB2 = () => {
    let variants: number[][] = [];
    let maxMinu = 2
    let over1 = _.range(2, 10)
    over1 = _.shuffle(over1)
    // these are unique so variants will be unique
    let subs = _.concat([0, 1], over1)

    let mins = []
    // min 4 crossovers (need subr at least 2)
    while (variants.length < 4) {
      let subr = subs.pop()
      let cnt = 0
      while (true) {
        if (cnt > 1000) {
          console.log("SUB2 got high")
          return SUB2()
        }
        cnt++;
        let minu = _.random(11, 9 + subr)
        let difference = minu - subr

        if (!(count(mins, minu) > maxMinu - 1)) {
          mins.push(minu)
          variants.push([minu, subr, difference])
          break
        }
      }
    }
      
 
    let CZeros = 1
    // for temp_sub in subs {
    while (variants.length !== 10) {
      let subr = subs.pop() + choice([0, 10])
      let cnt = 0
      while (true) {
        cnt++;
        if (cnt > 1000) {
          console.log("S2 stuck")
          return SUB2()
        }
        let minu = _.random(Math.max(subr + (CZeros ? 0 : 1), 11), 20);
        if (count(mins, minu) > maxMinu - 1) {
          continue
        }
        else {
          mins.push(minu)
          let difference = minu - subr
          if (difference === 0) {
            CZeros--;
          }
          variants.push([minu, subr, difference])
          break
        }
      }
    }

    variants = _.shuffle(variants)

    // b0,c0,cr=0,0,0
    // for a,b,c in variants:
    //     if (b===0 {b0+=1
    //     if (c===0 {c0+=1
    //     if (b%10>a%10 {cr+=1
    // if (b0>1 or c0>1 or cr < 4 { console.log('s2err')
    // for i in range(20) {
    //     if (ab_count(i, variants) > 3 {
    //         console.log("s2 too much RHS repetition")
    return [variants, 'ABC']

export const SUB3 = () => {
    let variants: number[][] = [];
    let subs = _.concat(nArrComp(_.range(1, 8), (i) => i * choice([1, 10])), [8, 9]);
    subs = _.concat(subs, [choice([_.random(1, 7) * choice([1, 10]), 8, 9])]);
 
    _.forEach(subs, subr => {
      while (true) {
        let minu = 10 * _.random(Math.max(3, subr / 10), 10);
        let variant = [minu, subr, minu - subr];
        if (myFind(variants, variant) < 0) {
          variants.push(variant);
          break;
        }
      }
    });
 
    variants = _.shuffle(variants)
    return [variants, 'ABC']
/*

export const SUB4() => {
    ''' NOTE { GOOD
    I ignored the condition that A >= 21 && used A >= 20 instead
    '''
    let variants: number[][] = [];
    same_digit = 2

    // reversed means we will see 9 first which avoids crossover issues
    // range(10) ensures variants will be unique
    for subr in reversed(range(10)) {
        minuDigit = _.random(subr + (0 if (same_digit else 1), 9)
        if (minuDigit === subr {
            same_digit--;

        minu = 10 * _.random(2, 9) + minuDigit
        difference = minu - subr
        variants.push([minu, subr, difference])

    variants = _.shuffle(variants)
    sam=0
    for a,b,_ in variants:
        if (a%10 === b%10 { sam++;
    if (sam > 2 {
        console.log('s4sam')
    return [variants, 'ABC'

export const SUB5() => {
    '''NOTE { GOOD'''
    subs = _.range(2, 10))
    mins = [10 * _.random(2, 9) + _.random(1, sub - 1) for sub in subs]
    difference_list = [i - j for i, j in zip(mins, subs)]
 
    variants = list(zip(mins, subs, difference_list))
    variants = _.shuffle(variants)
 
    // final 2 variants
    while (variants.length !== 10 {
        subr = _.random(2, 9)
        minu = 10 * _.random(2, 9) + _.random(1, subr - 1)
        add_if_unique([minu, subr, minu - subr], variants)
    
    for a,b,_ in variants:
        if (a%10>b%10 {
            console.log('s5adigit')
    return [variants, 'ABC'

export const SUB6() => {
    '''NOTE { GOOD'''
    // awkward
    let variants: number[][] = [];
    same_digit = 2
    while (variants.length !== 10 {
        minuDigit = _.random(1, 9)
        minu = 10 * _.random(2, 9) + minuDigit

        // at least one subr has a zero unit
        if (variants.length < 9 {
            subrDigit = _.random(1, minuDigit)

            if (minuDigit === subrDigit {
                if (same_digit {
                    same_digit--;
                else {
                    continue

            subr = 10 * _.random(1, minu//10 - 1) + subrDigit
        else {
            subr = 10 * _.random(1, minu//10 - 1)
 
        variant = [minu, subr, minu - subr]
        if (variant not in variants:
            variants.push(variant)
 
    // shuffle in the zero subr digit variant
    variants = _.shuffle(variants)
    sam=0
    for a,b,_ in variants:
        if (a%10 === b%10 {
            sam++;
    if (sam > 2 { console.log('s6sam')
    return [variants, 'ABC'

export const SUB7() => {
    ''' NOTE { GOOD
        always have X0 - Y0
        50% of the time have X1 - Y1
         {/
        have a lot of AB - XY where B is small, i could force larger tho when Y is big
    '''
    let variants: number[][] = [];
    subDigits = _.range(2, 10))*2
    shuffle(subDigits)

    while (variants.length !== 10 {
        subDigit = subDigits.pop()
        subr = 10 * _.random(1, 8) + subDigit
        cnt = 0
        while (true {
            if (cnt > 1000 {
                console.log("SUB 7 got high")
                return [SUB7()
            cnt++;
            minuDigit = _.random(1, subDigit - 1)

            minu = 10 * _.random(subr//10 + 1, 9) + minuDigit
            variant = [minu, subr, minu - subr]
            if (variant not in variants:
                variants.push(variant)
                break
 
    sam = 0
    for a,b,_ in variants:
        if (not b%10 >= a%10 {    console.log('s7digit')
        if (a%10 === b%10 { sam++;
    if (sam { console.log('s7sam')
    variants = _.shuffle(variants)
    return [variants, 'ABC'

''' did b>100 really have to be a condition at least 4 times? why not b >=100'''
export const SUB8() => {
    '''NOTE { GOOD'''
    CND1 = []
    // 4 where 100|A, 10|B, B < 100
    while (len(CND1) !== 4 {
        minu = 100 * _.random(2, 9)
        subr = 10 * _.random(2, 9)
        difference = minu - subr
        if (100 < difference <= 1000 {
            add_if_unique([minu, subr, difference], CND1)

    hunSub = 100 * _.random(2, 9)
    CND1.push([1000, hunSub, 1000 - hunSub])
    shuffle(CND1)

    CND2 = []
    // 4 where 100|(A && B)
    while (len(CND2) !== 4 {
        minuHuns = _.random(3, 9)
        minu = 100 * minuHuns
        subr = 100 * _.random(2, minuHuns - 1)
        difference = minu - subr
        if (100 < difference <= 1000 {
            add_if_unique([minu, subr, difference], CND2)
 
    tenSub = 10 * _.random(1, 9)
    CND2.push([1000, tenSub, 1000 - tenSub])
    shuffle(CND2)

    variants = CND1[ {3] + CND2[ {3]
    variants = _.shuffle(variants)
    // to satisfy min_before_repeat
    if (choice((true, false)) {   variants = [CND1.pop(), CND2.pop()] + variants + [CND1.pop(), CND2.pop()]
    else {   variants = [CND2.pop(), CND1.pop()] + variants + [CND2.pop(), CND1.pop()]

    c1,c2,c3,c4 = 0,0,0,0
    for a,b,_ in variants:
        // sloppy
        c1++; if (a>100 && b<100 else 0
        c2 += int(a>100 && b>100)
        if (a===1000 && b>100 {
            c3++;
        c4 += int(a===1000 && b<100)

    if (c1 < 4 {console.log('s8c1')
    if (c2 < 4 {console.log('s8c2')
    if (c3 not in (1,2) {console.log('s8c3')
    if (c4 not in (1,2) {console.log('s8c4')

    return [variants, 'ABC'

export const SUB9type1() => {
    mHuns, mTens = _.random(1, 9),   _.random(1, 8)
    sHuns, sTens = 0,               _.random(mTens + 1, 9)

    minu = 100 * mHuns + 10 * mTens
    subr = 100 * sHuns + 10 * sTens
    return [[minu, subr, minu - subr]
export const SUB9type2() => {
    mHuns, mTens = _.random(2, 9),           0
    sHuns, sTens = _.random(1, mHuns - 1),   _.random(1, 9)
    
    minu = 100 * mHuns + 10 * mTens
    subr = 100 * sHuns + 10 * sTens
    return [[minu, subr, minu-subr]
''' allowance of 10X0 here due to spec '''
export const SUB9type3() => {
    mHuns, mTens = _.random(1, 9),               _.random(2, 9)
    sHuns, sTens = _.random(1, min(mHuns,9)),    _.random(1, mTens - 1)

    minu = 100 * mHuns + 10 * mTens
    subr = 100 * sHuns + 10 * sTens
    return [[minu, subr, minu-subr]
export const SUB9() => {
    '''NOTE { GOOD'''
    let variants: number[][] = [];
    while (variants.length < 3 {
        variant = SUB9type1()
        add_if_unique(variant, variants)
     
    while (variants.length < 6 {
        variant = SUB9type2()
        add_if_unique(variant, variants)

    while (variants.length < 9 {
        variant = SUB9type3()
        add_if_unique(variant, variants)
     
    variants = _.shuffle(variants)

    // last variant
    while (variants.length !== 10 {
        var_type = choice((SUB9type1, SUB9type2, SUB9type3))
        add_if_unique(var_type(), variants)


    c1,c2,c3 = 0,0,0
    for a,b,_ in variants:
        bh = (b%1000)//100
        bt = (b%100)//10
        ah = (a%1000)//100 or (a//1000)*10 // allow 1000
        at = (a%100)//10
        if (a%10 !== 0 or b%10 !== 0 { console.log('s10 there is a digit')

        if (bh===0 && ah in range(1,11) && at in range(1, 10) && bt>at { c1++;
        if (all((bh>0,at===0,ah in range(1,11),bt>0)) { c2++;
        if (all((bt<at, bh>0, at>0)) { c3++;

    if (c1<3 {console.log('s9 c1 fail')
    if (c2<3 {console.log('s9 c2 fail')
    if (c3<3 {console.log('s9 c3 fail')
    return [variants, 'ABC'

// didn't add min_before_repeat structure from 9. was this necessary?
export const SUB10() => {
    '''NOTE { GOOD'''
    // at least one variant sHuns > 10
    let variants: number[][] = [];
    mHuns = _.random(12, 19)
    mTens = _.random(0, 8)
    sHuns = _.random(11, min(mHuns - 1, 15))
    sTens = _.random(mTens + 1, 9)

    minu = 100 * mHuns + 10 * mTens
    subr = 100 * sHuns + 10 * sTens
    variants.push([minu, subr, minu - subr])
 
    while (variants.length !== 10 {
        mHuns = _.random(5, 19)
        mTens = _.random(0 if ((mHuns >= 11) else 1, 8)
        sHuns = _.random(1, min(mHuns - 1, 15))
        sTens = _.random(mTens + 1, 9)
        minu = 100 * mHuns + 10 * mTens
        subr = 100 * sHuns + 10 * sTens
        variant = [minu, subr, minu-subr]
        if (variant not in variants:
            variants.push(variant)
 
    variants = _.shuffle(variants)
    b1000 = 0
    for a,b,_ in variants:
        if (not (500 < a < 2100) or not (100 < b < 1600) { console.log('s10range')
        if (not (a%100)//10 < (b%100)//10 { console.log('s10atbt')
        if (not a//100 > b//100 { console.log('s10ahbh')
        if (not (b%100)//10 > 0 { console.log('s10b10')
        if ((a%100)//10 === 0 && a < 1100 { console.log('s10 issue')
        if (b > 999 { b1000++;
    if (not b1000 { console.log('s10b1000')
    return [variants, 'ABC'

export const SUBER(lvl) {
    lst = [SUB1, SUB2, SUB3, SUB4, SUB5, SUB6, SUB7, SUB8, SUB9, SUB10]
    return [lst[lvl - 1]()
    */ 
