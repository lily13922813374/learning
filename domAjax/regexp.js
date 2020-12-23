// regexp获取请求地址里的参数.js
function getQueryString (url) {
  let obj = {}
  url.replace(/([^?&]+)=([^?&]+)/g, function(match ,$1, $2) {
    obj[$1] = $2
  })
  console.log('obj', obj)
  return obj
}
let search = 'http://xxx.com?name=lily&age=23&career=tearch&t_a=3df'
getQueryString(search)

function replacer(match, p1, p2, p3, offset, string) {
  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
  return [p1, p2, p3].join(' - ');
}
var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString); // abc - 12345 - #$*%