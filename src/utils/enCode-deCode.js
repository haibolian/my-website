function htmlEncode(html){
  let temp = document.createElement ("div");
  //2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(旧版火狐，google支持, ie8+支持)
  (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
  return temp.innerHTML
}

function htmlDeCode(text){
  let div = document.createElement('div')
  div.innerHTML = text
  return div.innerText || div.textContent
}

function htmlEncodeByRegExp(str){
  if(!str,length) return ""
  let s = str.replace(/&/g,"&amp;");
  s = s.replace(/</g,"&lt;");
  s = s.replace(/>/g,"&gt;");
  s = s.replace(/\s/g,"&nbsp;");
  s = s.replace(/\'/g,"&#39;");
  s = s.replace(/\"/g,"&quot;");
  return s
}

function htmlDeCodeByRegExp(str){
  if(!str,length) return ""
  let s = str.replace(/&amp;/g,"&");
  s = s.replace(/&lt;/g,"<");
  s = s.replace(/&gt;/g,">");
  s = s.replace(/&nbsp;/g," ");
  s = s.replace(/&#39;/g,"\'");
  s = s.replace(/&quot;/g,"\"");
  return s
}

let htmlUtils = {
  htmlEncode,
  htmlDeCode,
  htmlEncodeByRegExp,
  htmlDeCodeByRegExp
}

export default htmlUtils

export { htmlEncode, htmlDeCode, htmlEncodeByRegExp, htmlDeCodeByRegExp}