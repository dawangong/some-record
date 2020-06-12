// 将 %> 替换成 p.push('
// 将 <% 替换成 ');
// 将 <%=xxx%> 替换成 ');p.push(xxx);p.push('

// var p = []; p.push('');
// for ( var i = 0; i < users.length; i++ ) {
//   p.push('<li><a href="');
//   p.push(users[i].url);
//   p.push('">');
//   p.push(users[i].name);
//   p.push('</a></li>');
// }
// p.push('');

// 压缩标签空格
const tagMin = str => str.replace(/(>)(\s+)(\w*)(\s+)(<)/g, '$1$3$5');

// eval 解析字符串
const template1 = (str, users) => {
  let p = [];
  const _str = "p.push('" + str
        .replace(/[\r\t\n]/g, "")
        .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
        .replace(/<%/g, "');")
        .replace(/%>/g,"p.push('")
         + "');"
  // 执行代码
  eval(_str);
  return tagMin(p.join(''))
};

// new Function 解析字符串
const template2 = (str, data) => {
  const fn = new Function("users",

    "var p = []; p.push('" +

    str
      .replace(/[\r\t\n]/g, "")
      .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
      .replace(/<%/g, "');")
      .replace(/%>/g,"p.push('")
    + "');return p.join('');");
  return tagMin(fn(data));
};

// 数据改变 new Function 只调用一次
const template3 = str => {
  const _str = tagMin(str);
  const fn = new Function("users",

    "var p = []; p.push('" +

    _str
      .replace(/[\r\t\n]/g, "")
      .replace(/<%=(.*?)%>/g, "');p.push($1);p.push('")
      .replace(/<%/g, "');")
      .replace(/%>/g,"p.push('")
    + "');return p.join('');");
  return data => fn.call(this, data)
};

/**
 * "var a = '1\n23';console.log(a)".toString() ?
 * 在 Function 构造函数的实现中，首先会将函数体代码字符串进行一次 ToString
 * 字符串表达式中是不允许换行的 !
 * var log = new Function("var a = '1\n23';console.log(a)");log()
 */

// 防toSting
const escapeChar = function(match) {
  const escapes = {
    "'": "'",
    '\\': '\\',
    '\r': 'r',
    '\n': 'n',
    '\u2028': 'u2028', // 行分隔符
    '\u2029': 'u2029' // 段落分隔符
  };
  return '\\' + escapes[match];
};

const escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function replacer(match, p1, p2, p3, offset, string) {
  // match，表示匹配的子串 abc12345#$*%
  // p1，第 1 个括号匹配的字符串 abc
  // p2，第 2 个括号匹配的字符串 12345
  // p3，第 3 个括号匹配的字符串 #$*%
  // offset，匹配到的子字符串在原字符串中的偏移量 0
  // string，被匹配的原字符串 abc12345#$*%
  return [p1, p2, p3].join(' - ');
}
const newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer); // abc - 12345 - #$*%

export {
  template1,
  template2,
  template3
};
