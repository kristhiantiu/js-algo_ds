const codeToTyped = function(str) {
  return [...str].reduce((arr, char) => {
    if (char === '#' && arr.length > 0) {
      arr.pop()
    } else {
      arr.push(char)
    }
    return arr
  }, []).join('')
}

function typedOutStringsBruteForce(S, T) { // S O(A + B)
  return codeToTyped(S) == codeToTyped(T)
}

function typedOutStrings(s, t) {
  let sp = s.length - 1;
  let tp = t.length - 1;
  let sskip = 0;
  let tskip = 0;
  while(sp >= 0 || tp >= 0) {
    if (s[sp] === '#') {
      sskip+=2
    }
    if (t[tp] === '#') {
      tskip+=2
    }

    if (sskip === 0 && tskip === 0
      && s[sp] !== '#' && t[tp] !== '#'
      && s[sp] !== t[tp]) {
        return false;
    }
    sp -= sskip || 1;
    tp -= tskip || 1;
  }
  return true;
}


module.exports = typedOutStrings