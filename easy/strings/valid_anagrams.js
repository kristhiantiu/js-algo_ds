function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  } else {
    // all characters on str1 is on str2, with same count
    const str1CharCounts = [...str1].reduce((mapping, char) => ({
      ...mapping,
      [char]: mapping[char] ? ++mapping[char]: 1
    }),{})
    const str2CharCounts = [...str2].reduce((mapping, char) => ({
      ...mapping,
      [char]: mapping[char] ? ++mapping[char]: 1
    }),{})
    for(let char in str1CharCounts) {
      if (!(char in str2CharCounts) //charIsNotExistingOnStr2 
        || str2CharCounts[char] !== str1CharCounts[char]) { //isNotSameCount
        return false;
      }
    }
    return true;
  }
}
module.exports = validAnagram;