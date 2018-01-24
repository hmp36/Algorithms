function rotateString(Str,num){
    while(num > str.length){
        num-=str.length;
    }
    var temp = Str.slice(str.length-num,str.length);
    var temp2 = Str.slice(0, str.length - num);
    
    str = temp + temp2;
    console.log(str);
    return str;
}
var str = "funtime";
rotateString(str, 73);




