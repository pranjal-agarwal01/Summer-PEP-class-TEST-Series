function changeArray(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){

        
            arr[i]= arr[i]*arr[i];
        }

    }
    return arr;
}
const input = [2,3,4,5,6];
const output = changeArray(input);
console.log(output); 