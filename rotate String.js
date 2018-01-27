fuction rotateString(str,num){
    while(num > str.length){
        num-=str.length;
}
    var temp = str.slice(str.length - num,str.length - 1);
    va temp2 = (0, str.length- num - 1);
    str = temp + temp2;
    return str;
}