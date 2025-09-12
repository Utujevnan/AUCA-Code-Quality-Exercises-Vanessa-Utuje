function recursiveSum(arr) {
  function helper(index) {
    if (index >= arr.length) return 0;

    return arr[index] + helper(index + 1);
  }

  return helper(0);
}
s;
