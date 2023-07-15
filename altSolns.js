/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    let j = 0;

    while (j < str.length && j < prefix.length && str[j] === prefix[j]) {
      j++;
    }

    prefix = prefix.substring(0, j);

    if (prefix === "") {
      return "";
    }
  }

  return prefix;
}

function longestSimilarPrefix(strs) {
  let sorted = strs.sort((a, b) => (a < b ? -1 : 1));

  let output = [];
  let firstword = sorted[0];
  let lastword = sorted[sorted.length - 1];
  for (var i = 0; i < firstword.length; i++) {
    if (firstword[i] == lastword[i]) {
      output.push(firstword[i]);
    } else {
      break;
    }
  }

  return output.join("");
}

const longestCommonStarter = function (strs) {
  // sort the array because its rearrange alphabetical order
  strs.sort();

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substr(0, i);
    }
  }

  return strs[0];
};
