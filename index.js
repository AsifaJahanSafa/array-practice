// get friends array by using while loop

let friends=['Mustakim','Ibrahim','Hilil','Mustofa'];

let i=0;
while(i<friends.length){
    console.log(i,':',friends[i]);
     i++
}


// reverse friends array
let reverse=[];
let n=0;
while(n<friends.length){
    // console.log(friends[n]);
    reverse.unshift(friends[n]);
    n++
}

// console.log(reverse)


// // Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers=[12,98,5,41,23,78,46];
let number=0;
let evenNumbers=[];
while(number<numbers.length){
    
    let num=numbers[number];
    if(num%2===0){
        console.log(num);
        evenNumbers.push(num)
    }
    number++
}

console.log(evenNumbers)


let millionaires=['Elone','Mark','Warren','Bill'];
let m=millionaires.length-1;
let empty=[];
while(m>=0){
    // console.log(m,millionaires[m]);
    const millionaire=millionaires[m];
    empty.push(millionaire)
    m--
}

console.log(empty);

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
const statement = 'I am a hard working person';
const join=statement.split(' ');
console.log(join);

let a=0;
let position=[];
while(a<join.length){
    const num=join[a]
    position.unshift(num);
    a++
}
console.log(position.join (' '));
// example-2
let f=join.length-1;
let arr=[];
while(f>0){
    const num=join[f];
    arr.push(num)
    f--

}

console.log(arr.join(' '))