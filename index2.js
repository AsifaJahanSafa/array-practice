// get friend array by uing for loop
let friends=['Mutakim','Ibrahim','Hilal','Mutofa'];
for(let i=0;i<friends.length;i++){
    console.log(i)
}


// get revere friend array by using regular for loop 
let rev=[];
for(let n=0;n<friends.length;n++){
   rev.unshift(friends[n]);
}

console.log(rev)


// for loop 

let personalGrowths=['Clear Goals','Emotional Intelligence','Personal Growth Areas',' Financial Literacy'];
let reversed=[];
for(let personalGrowth of personalGrowths){
    console.log(personalGrowth);
    reversed.unshift(personalGrowth)
}

console.log(reversed);

const colors=['red','blue','green','yellow','orange'];
let reverse=[];
for(let color of colors){
    reverse.unshift(color);
    
}

console.log(reverse);

// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers=[12,98,5,41,23,78,46];
let evenNumbers=[];
for(let i=0; i<numbers.length;i++){
    // console.log(i,numbers[i])
    let num=numbers[i];
    // console.log(num);
    if(num%2===0){
        evenNumbers.push(num)
      
    }
   
}

console.log(evenNumbers)

// or
let evenNumbers2=[];
for(let number of numbers){
   if(number%2===0){
    evenNumbers.push(number)
   }
}
console.log(evenNumbers)

// reverse with regular for loop without reverse method

let empty=[];
let friends2=['Elone','Mark','Warren','Bill']
for(let n=friends2.length-1;n>=0;n--){
  
    const num=friends2[n];
    empty.push(num)
}

console.log(empty)


// reversed loop without reverse method
let millionaire=['Elone','Mark','Warren','Bill'];

millionaire.reverse();
console.log(millionaire)