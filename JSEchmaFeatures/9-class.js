class Employee{
  constructor(name){
      this.name=name;
  }
  banner=()=>console.log(this.name + 'is an Employee');
}

class Manager extends Employee{
  constructor(name,section){
      super(name);
      this.section=section;
  }
  banner=()=>console.log(this.name +' is and Employee an manager of  '+this.section );
}

const e1=new Employee("Brian");
const e2=new Manager("Walker","QA");

e1.banner();
e2.banner();
// in her we override the banner function
e2.banner=()=>console.log("this function is overriden");
e2.banner();
