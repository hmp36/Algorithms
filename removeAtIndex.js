

function removeAtIndex(arr, idx){
    var temp; //tempvalue for returning value


    console.log(arr);
    temp = arr [idx];
    console.log(temp);
    console.log("idx:",idx);

    for(let i = idx; i<arr.length-1; i++){
        let temp = 10;
        console.log('i:',i);
        console.log('arr[i]:',arr[i]);
        arr[i] = arr[i+1];
    }
    
    arr.pop();
    console.log(arr);

    return temp;
}    

result = removeAtIndex( [7,8,9,10], 2 )




