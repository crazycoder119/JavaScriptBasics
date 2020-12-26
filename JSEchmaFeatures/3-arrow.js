function area(x,y){
  return x*y;
}
const area2 = (x,y)=>{return x*y;}

const area3 = (x,y)=>x*y;

//Input argument is x and it multiply and return
const area4=x=>x*x;

console.log(area(10,12));
console.log(area2(10,12));
console.log(area3(10,12));
console.log(area4(5));
