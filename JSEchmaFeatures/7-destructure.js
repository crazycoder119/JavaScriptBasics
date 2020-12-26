/*const PI=Math.PI;
const SQRT2=Math.SQRT2; */
// we can replace above two by this
// this happen because we have the same module
const {PI,SQRT2}=Math;
console.log(SQRT2);

//With functions

const square={
  base:12.2,
  id:"main",
  color:"blue",
  line:true,
  rounded:false,
  round:0
}

const area=({base})=>{
  return base*base;
}
// In here we pass square object but area function take the base parameter only from square object
console.log(area(square));

// in her we round the value to 3 wich is default value
const area2=({base},{round=3}={})=>{
  return (base*base).toFixed(round);
}

console.log(area2(square));
console.log(area2(square,{round:5}));


var fs=require('fs');
fs.writeFile('sample.txt','Hello js!', function(err){
  if(err) throw err;
  console.log('Saved!');
});

// with distrupt
const{writeFile}=require('fs');
writeFile('sample2.txt','Hello js!', function(err){
  if(err) throw err;
  console.log('Saved!');
});

//array
const [jan,feb,mar,,may]=[10,20,30,40,50];
console.log(jan);
console.log(may);

const [month1, ...otherMonths]=[10,20,30,40,50];
console.log(month1);
console.log(otherMonths);

// in here we can copy one array to another array
let newArray=[...otherMonths];
console.log("New Array => ", newArray);
// we can merge two arrays
let new2=[...otherMonths,...newArray];
console.log("New2 => ", new2);

// rest use to eliminate
const data={
  name:"Brian",
  city:"NC",
  country:"USA",
  age:48,
  vehicle:"ford",
  game:"baseball"
}

let{vehicle,game, ...person}=data;
console.log(person);

let person2={...person};
console.log("person 2 =>",person2);
