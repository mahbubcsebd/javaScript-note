// Create an object
const person = {
    firstName: "Mahbubur",
    lastName: "Rahman",
    yob: 1996,
    fullName: function(){
        return (`${this.firstName} ${this.lastName}`);
    },
    age: function(){
        let date = new Date().getFullYear();
        return date - this.yob;        
    }
}

// bahir theke person er vitore kono property add korte chaile
person.eyeColor = "black";

// person properties & method access
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.yob);
// console.log(person.eyeColor);
// console.log(person.fullName());
// console.log(person.age());


let x = person; // ekhane x & person alada kono object na, tara ekoi memory location e pointer set kore, that's why amra jodi x er kono property change kori tahole seta sudhu x e change na hoye person keo change kore felbe.

x.eyeColor = "brown";

console.log(x.eyeColor) //brown
console.log(person.eyeColor) //brown

// Primitive value gula Immutable, mane primitive value gula edit kora jay na. second time etake edit/change korte gele by default value ta ager value er sathe replace hoye jay.

// pass by value - bolte bujhay value nijei ekta box hisabe memory te jayga niye ache. box(value) change hole se memory te alada jayga nibe. let x = 5; ekahne 5 nijei ekta box tai amra jodi x er maan pore x = 6; kori tahole jehetu box change hoye geche tai x memory te alada jayga niye x er maan 6 korbe.

// but objects are mutable. tar mane object er vitorer value gula amra chaile edit/add/delete korte parbo.

// pass by reference - object, array, function era memory te reference hisabe memory te jayga ney. object - {}, array - [], function - {} ekhane parenthesis gula hocche box, amra oi box e joto khusi value add delete korte pari ete box o change hobe na r tai memory location o change hobe na.


