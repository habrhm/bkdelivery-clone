/* eslint-disable @typescript-eslint/no-explicit-any */
export const isArrayEqual = (array1: any[], arrray2: any[]) => {
  // if the other array is a falsy value, return
  if (!array1) return false;
  // if the argument is the same array, we can be sure the contents are same as well
  if (array1 === this) return true;
  // compare lengths - can save a lot of time
  if (arrray2.length != array1.length) return false;

  for (let i = 0, l = arrray2.length; i < l; i++) {
    // Check if we have nested arrays
    if (arrray2[i] instanceof Array && array1[i] instanceof Array) {
      // recurse into the nested arrays
      if (!isArrayEqual(arrray2[i], array1[i])) return false;
    } else if (arrray2[i] != array1[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }
  return true;
};
