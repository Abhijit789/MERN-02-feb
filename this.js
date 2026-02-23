"use strict"

console.log(this);

let obj={
    name:"ajay",
    display(){
        console.log(this.name);
        
    }
}
obj.display()