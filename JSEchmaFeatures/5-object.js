let SQRT2 = Math.SQRT2;
let status="order condition ";
const vehicle={
  // 3 key value pairs
  make:"Mitsubishi",
  p1:100,
  p2:200,
  // function
  drive(){},
  stop:()=>{},
  // we use this if we dont know the value comes from above means is it service or request or admin
  // we only know is this is ready
  [status]:"ready", //dynamic properties
  // this is same as SQRT2:SQRT2 is getting above value
  SQRT2
}

console.log(vehicle);
