// ----------------VARIABLES----------------
// var somethingElse = ('hello world')
// console.log(somethingElse)

// str = "The blue blanket is sitting on the desk"
// console.log(str)

//                                                  CONCATENATING STRINGS TO FORM A URL
// website = "https:arkmont.com/";

// new_string = "The quiCK brown FOW jumps of the  lazy dog";

// new_string = "The quiCK brown FOW jumps of the  lazy dog";

// new_string = new_string.toLowerCase()

// url = new_string.replace(" ", " ")

// url = new_string.replace("  ", " ")

// url = url.split(" ")

// url = url.join('-')
// url = website + url

// console.log(url)

// //                               PRINTS OUT "https:arkmont.com/the-quick-brown-fow-jumps-of-the-lazy-dog"

// == (equal to) 
// === (strict equal to, ensures var types are adheared to)

// age = 20;    
// age != 20; /* false */
// age != 19 /* true */;

// var empty;
// console.log(empty)

// empty == undefined /* true */
// empty === undefined /* true */
// empty != undefined /* false */


// ----------------IF ELSE STATEMENTS----------------

// var name = 'Jake'

// if(name == 'Jake') {
//     alert("Hurray it\'s me")
//     } else {
//         alert('My name is NOT Jake')
//     }

// if(name == 'Joseph') {
//     alert('Hello Joe')
// } else if(name == 'Jake') {
//     alert('THIS IS TRUE')
// } else {
//     alert('SOMETHING ELSE')
// }


// name = prompt('What is your name?')
// if(name.toLowerCase() == "jake") {
//     alert('Hello Jake')
// }

var name = prompt("what is your name")

if(name == null) {
    alert("Hello " + name)
} else if(name === null){
    alert("It's no name!")
} else {
    alert("Hello guest")
}