// function

function webDevelopment(){
    console.log('1.Learn Html');
    console.log('2.Learn vanila Css');
    console.log('3.Learn Css component library ');
    console.log('4.Lear Basic Java script');
    console.log('5.Learn Dom')
}


// function calling
 webDevelopment()

// example-1
 function square(number){
    console.log('number is:',number)
    const box= number*number;
    console.log('square is:',box)
 }

 square(4);
 square(5);
 square(7);
 square(55);

//  Example-2

function add(x,y,z){
    const addition=x+y+z;
    console.log(addition)
}

add(5,10,2);

// Example-3

function substraction(numb1,numb2){
    const reduction=numb1-numb2;
    console.log(reduction)
}

substraction(215,5)


// Example-4

function doubleIt(number){
    const double=number*2;
    console.log('number:',number,'double:',double)
}

console.log('I will call a function');
doubleIt(5);
console.log('---------------');
doubleIt(40);
console.log('---------------------');
doubleIt(1000);
console.log('------------------------')


// Example-5
function difference(num1,num2){
    const diff=num1-num2;
    console.log('num1:',num1,'num2:',num2,'diff:',diff)
}

let fatherAge=50;
let childAge=15;
difference(fatherAge,childAge);


// Example-6
function tenTimes(number){
    const multiple=number*10;
    return multiple
}
let number=5
const output=tenTimes(number);
console.log(output);


// Example-7
function halfCut(numb){
    const half=numb/2;
    return half
}

let numb=40;
const output2=halfCut(numb);
console.log(output2);

function bill1(price1,price2){
    const total=price1+price2;
    return total
}

const bill=bill1(5,8);

function bill2(price1,price2){
    return price1+price2
}

const output3=bill2(5,8);
console.log(bill,output3)



// Example-8
function doMath(num1,num2){
    const add=num1+num2;
    const diff=num1-num2;
    const multiply=add* diff;
    const div=multiply/2;
    return div
}

const result=doMath(10,2);
console.log(result)


// Example-9
// find odd Number
function oddNumber(number){
    if(number%2===0){
        return true
    }else{
        return false
    }
}

const odd=oddNumber(5);
console.log(odd);
const odd2=oddNumber(10);
console.log(odd2)

// Example-9
// find odd Number

function isOdd(num){
    if(num%2===1){
        return true
    }
    return false
}

console.log(isOdd(4));
console.log(isOdd(15))

