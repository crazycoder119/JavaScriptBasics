// let obj={"country":""};
// obj.country="Sri Lanka";
// // in here we freeze the object then no one can change the object
// Object.freeze(obj);
// console.log(obj);
//
// obj.country="USA";
// console.log(obj);

let flower = {
  name:"",
  price:{
    t1:10,
    t2:20
  }
}

flower.name = "rose";
flower.price.t1=15;

console.log(flower);
Object.freeze(flower);

flower.name = "orchid";
flower.price.t1=25;
console.log(flower);
