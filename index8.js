// write a function  to give me the sum of an array 

function sumOfArray(numbers){
    // console.log(numbers)
    let sum=0;
    for(const numb of numbers){
        sum=sum+numb;
        console.log(sum)
    }return sum
}

const num=[2,4,2,5,3];
const sum=sumOfArray(num);
console.log(sum)