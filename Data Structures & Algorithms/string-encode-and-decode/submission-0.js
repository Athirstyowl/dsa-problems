class Solution {
  // Encode: [ "Hello", "World" ] -> "5#Hello5#World"
  encode(strs) {
    let encoded = '';
    for (const s of strs) {
      encoded += s.length + '#' + s;
    }
    return encoded;
  }

  // Decode: "5#Hello5#World" -> [ "Hello", "World" ]
  decode(s) {
    const res = [];
    let i = 0;
    while (i < s.length) {
      // read digits until '#'
      let numStr = '';
      while (i < s.length && s[i] !== '#') {
        numStr += s[i];
        i++;
      }
      // skip the '#'
      i++; // move past '#'
      const len = parseInt(numStr, 10);
      // take the next 'len' characters
      const str = s.substr(i, len);
      res.push(str);
      i += len;
    }
    return res;
  }
}