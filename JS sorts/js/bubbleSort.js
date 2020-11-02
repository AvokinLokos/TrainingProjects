console.log('Bubble sort');
function bubbleSort(arr){
    let len = arr.length;
    for (let i = len-1; i>=0; i--){
        for(let j = len-1; j>=0; j--){
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


