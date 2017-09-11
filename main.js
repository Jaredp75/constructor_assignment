//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog () {
  this.name = name;
  this.status = status;
}

let sadie = new Dog();
let moonshine = new Dog();
let atticus = new Dog();

// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (pet) {
  this.pet = function() {
    console.log(this.pet)
  }
}

let mason = new Human();
let julia = new Human();
// Instances of Human
// Needed: mason, julia
