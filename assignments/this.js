/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The global window. When using this as in exmaple 1 below, it will
     pull up the entire global window. Why?  Because it's not inside of
     anything.  It's just in the global scope.

* 2. Implicit binding is when a function is called by a
     preceding . (dot), it is refering to the object before
     the dot.  In #2 below, that would mean dogToy.

* 3. New binding or constructor functions.  In this case, 'this' refers
     to the new object we created with the constructor function.  So,
     in my exmaple below, that would be Tyler and Cody.
     Also, look to the object left of the dot. 


* 4. Explicit binding.
     .call, .apply., and .bind is like overwriting the object. 
     For instance, in example four below, tyler is overwriting
     cody and vise versa. 


*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
   const dogToy = {
       toy: "BigBadBone",
       myToy: function(name){
        console.log(`${this.name}'s favorite toy is ${toy}`);
       }  
   }
   dogToy.myToy('Fido');

// Principle 3

// code example for New Binding
function Dog(obj) {
    this.name =  obj.name,
    this.breed = obj.breed,
    this.speak = function() {
        return `${this.name} is one badass ${this.breed} dog`;
    }
}

const cody = new Dog({name: 'Cody', breed: 'Rottweiler'});
const tyler = new Dog({name: 'Tyler', breed: 'Doberman'});
console.log(cody.speak());
console.log(tyler.speak())


// Principle 4

// code example for Explicit Binding
// using the constructor Dog above

cody.speak.call(tyler);
tyler.speak.apply(cody);
