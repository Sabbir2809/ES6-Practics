// Spread operator, concatenate multiple arrays, array max

const ages1 = [18, 19, 20, 22, 21];
const ages2 = [19, 23, 17];
const ages3 = [25, 27, 30];
// const allAges1 = ages1.concat(ages2).concat([5]).concat(ages3);
// console.log(allAges1);
const allAges2 = [...ages1, ...ages2, ...ages3]
console.log(allAges2);

/*

const business = 650;
const minister = 450;
const sochib = 250;

const maximum1 = Math.max(business, minister, sochib);
console.log(maximum1);
*/


const takaPoisa = [650, 450, 250];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);