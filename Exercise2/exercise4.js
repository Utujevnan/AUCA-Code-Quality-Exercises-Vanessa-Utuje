function reverseVowels(str) {
  const vowels = /[aeiouAEIOU]/;
  const found = [];

  for (let char of str) {
    if (vowels.test(char)) {
      found.push(char);
    }
  }

  found.reverse();

  let result = "";
  let index = 0;

  for (let char of str) {
    if (vowels.test(char)) {
      result += found[index];
      index++;
    } else {
      result += char;
    }
  }

  return result;
}
