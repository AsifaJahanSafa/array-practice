// sum of even number of an array element

function sumOfEvenNumber(numbers){
    let sum=0;
   for(const num of numbers){
   if(num%2===0){
    sum=sum+num
   
   } 
   }return sum
}

const number=[2,3,4,6,7,8];
const sum=sumOfEvenNumber(number);
console.log(sum)


 