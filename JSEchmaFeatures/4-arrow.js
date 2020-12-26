const print={
  function1: function(){
    console.log("This is function 1 ", this);
  },

  function2: ()=>{
    console.log("This is function 2 ",this);
  }
}

print.function1();
print.function2();
