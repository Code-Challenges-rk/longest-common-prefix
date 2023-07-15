/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  let i = 1;
  while (i < strs.length) {
    if (strs[i].startsWith(prefix)) {
      i++;
    } else {
      prefix = prefix.slice(0, -1);
      console.log(prefix);
    }
  }
  return prefix;
};

let strs = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs));
