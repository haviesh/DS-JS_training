function ciphercode(string,key){
    if(key>26){
        key = key - (parseInt(key/26))*26;
    }
var final_arr=[];
for(let i=0;i<string.length;i++){
   let temp=string.charCodeAt(i);
   let code = calDiff(temp+key,string[i]);
  final_arr.push(String.fromCharCode(code));
//console.log(final_arr);
}
return final_arr.join('');
}
function calDiff(code){
    if(code>122){
        code = code-26;
    }
     return code;
}
console.log(ciphercode('xyz',87));
