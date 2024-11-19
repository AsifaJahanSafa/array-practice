// sort()

const names=['Akib','pakib','galib','Rarib','Nakib','sakib'];
const namesSort=names.sort();
console.log(namesSort);


let numbers=[12,35,1,4,6,67,2,4,23];
// console.log(numbers);
const assending=[...numbers].sort(function(a,b){return a-b});
console.log(assending);

const decending=[...numbers].sort(function (a,b){return b-a});
console.log(decending)