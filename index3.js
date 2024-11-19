
// Use a for...of loop to concatenate all the elements of an array into a single string.
var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var empty='';

for(let i=0;i<numbers.length;i++){
   // console.log(numbers[i]);
   const singleName=numbers[i];
  empty +=singleName
}

console.log(empty)





// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
const join=statement.split(' ');
let add=[];
for(let i=join.length-1;i>=0;i--){
  //  console.log(join[i]);
  add.push(join[i])

}

console.log(add.join(' '));

const join2=statement.split(' ');
let addition=[];
for(let i=0;i<join2.length;i++){
 const add=join2[i];
addition.unshift(add)
}

console.log(addition.join(' '))