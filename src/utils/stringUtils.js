export function removePropertyOfNull(obj) {
  Object.keys(obj).forEach((item) => {
    if (!obj[item]) delete obj[item];
  });
  return obj;
}


export function newline(Str) {
 return "<p>" + Str.replace(/(\r)*\n/g, "</p><p>").replace(/\s/g, " ") + "</p>";
}


export function nowrap(Str) {
  return  Str.replaceAll("<p>", "").replaceAll("</p>","");
 }


