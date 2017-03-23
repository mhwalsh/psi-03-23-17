console.log('test');

// conditionals if / else if / else

var ourThing = true;
console.log("ourThing's type: ", typeof ourThing);

// number? string? anything else?
if(typeof ourThing === "number"){  // is this statement true?
  console.log("it's a number!");
} else if(typeof ourThing === "string"){
  console.log("i am a string");
} else { // otherwise - do this block
  console.log("I don't know the type");
}

// Objects - data structure
var millie = {
  pets: 'millie',
  plant: 15,
  live: 'minneapolis',
  sister: 1,
  sayHello: function() {
    console.log('HEY!');
  },
  friends: ['Ashlen', 'John', 'Amanda']
}

// When to use an Object vs. Array?
