const defaultCompareFunction = (a, b) => {
  return a - b;
};
/**
 * @param {Array} arr the sorted array to search
 * @param srch item to search for
 * @param {Function} compareFunction the function used to compare elements in array, it takes two arguments a and b (should return < 0 if a < b, 0 if a = b, > 0 if a > b)
 * @returns {{found: boolean, index: number}} returns an object with 'found' property to indicate if srch was found in arr, and an 'index' property indicating the first occurence of srch if it was found or the index to insert srch in so as array is still sorted (might be arr.length if srch is greater than all items in array)
 */
const binarySearch = (arr, srch, compareFunction = defaultCompareFunction) => {
  if(arr.length === 0) {
    return 0;
  }
  let i0 = 0;
  let i1 = arr.length - 1;
  while(true) {
    let m = Math.floor((i0 + i1) / 2);

    const compRes = compareFunction(arr[m], srch);
    if(compRes > 0) {
      i1 = m - 1;
      if(i0 > i1) {
        return { found: false, index: m };
      }
    }
    else if(compRes < 0) {
      i0 = m + 1;
      if(i0 > i1) {
        return { found: false, index: i0 };
      }
    }
    else {
      for(;m >= 0; m--) {
        if(compareFunction(arr[m], srch) !== 0) {
          return { found: true, index: m + 1 };
        }
      }
      return { found: true, index: 0 };
    }
  }
}

export default binarySearch;