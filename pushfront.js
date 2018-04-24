var arr = [11,22,33];
console.log(arr);
for(var idx=arr.length-1; idx>=0; idx--){
    console.log(idx);
    console.log(arr[idx]);
    arr[idx+1] = arr[idx]
}
console.log(arr);
arr[0] = 44;
console.log(arr);

