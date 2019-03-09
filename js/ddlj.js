var ddlj = (function () {
  function assert(...express) {
    const l = express.length;
    const msg = (typeof express[l - 1] === 'string') ? express[l - 1] : 'Assert Error';
    for (let b of express) {
      if (!b) {
        throw new Error(msg);
      }
    }
  }

  function randBin() {
    return Math.random() >= 0.5;
  }

  const ddljcode = '他是真的辣鸡一个垃圾戴兜没错菜鸡难受窒息LJ头大';

  function str2utf8(str) {
    // return in hex

    const notEncoded = /[A-Za-z0-9\-\_\.\!\~\*\'\(\)]/g;
    const str1 = str.replace(notEncoded, c => c.codePointAt(0).toString(16));
    let str2 = encodeURIComponent(str1);
    const concated = str2.replace(/%/g, '').toUpperCase();
    return concated;
  }

  function utf82str(utfs) {
    assert(typeof utfs === 'string', 'utfs Error');

    const l = utfs.length;

    assert((l & 1) === 0);

    const splited = [];

    for (let i = 0; i < l; i++) {
      if ((i & 1) === 0) {
        splited.push('%');
      }
      splited.push(utfs[i]);
    }

    return decodeURIComponent(splited.join(''));
  }

  function hex2duo(hexs) {
    assert(typeof hexs === 'string')

    const duo = [];

    for (let c of hexs) {
      const n = Number.parseInt(c, 16);
      if (n < 10) {
        duo.push(n);
      } else {
        if (randBin()) {
          duo.push(10);
          duo.push(n - 10);
        } else {
          duo.push(11);
          duo.push(n - 6);
        }
      }
    }
    return duo;
  }

  function duo2hex(duo) {
    assert(duo instanceof Array);

    const hex = [];

    const l = duo.length;

    let i = 0;

    while (i < l) {
      if (duo[i] < 10) {
        hex.push(duo[i]);
      } else {
        if (duo[i] === 10) {
          i++;
          hex.push(duo[i] + 10);
        } else {
          i++;
          hex.push(duo[i] + 6);
        }
      }
      i++;
    }
    return hex.map(v => v.toString(16).toUpperCase()).join('');
  }


  function duo2ddlj(duo) {
    return duo.map(d => ddljcode[2 * d] + ddljcode[2 * d + 1]).join('');
  }

  var ddlj = {
    decode: function (encoded) {
      const duo = [];

      for (let c of encoded) {
        const i = ddljcode.indexOf(c);
        if (i === -1) {
          continue;
        } else if (i & 1) {
          continue;
        } else {
          // i is even
          duo.push(i >> 1);
        }
      }

      const hexs = duo2hex(duo);

      assert((hexs.length & 1) === 0);

      let str;
      try {
        str = utf82str(hexs);
      } catch (e) {
        throw e;
      }
      return str;
    },
    encode: function (str) {
      return duo2ddlj(hex2duo(str2utf8(str)));
    }
  }
  return ddlj
})()

if (typeof module !== 'undefined' && module != null) {
  module.exports = ddlj
}