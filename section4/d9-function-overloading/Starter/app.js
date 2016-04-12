/**
 * example of function overloading, all functions are objects so in javascript 
 * we don't worry about function overloading. There are patterns shown below and
 * later in the course that handles this
 */

// one pattern
function greet(firstname, lastname, language) {
  // default to english
  language = language || 'en';
  
  if (language === 'en') {
    console.log('Hello ' + firstname + ' ' + lastname);
  }
  
   if (language === 'es') {
    console.log('Hola ' + firstname + ' ' + lastname);
  }
        
}

greet('Jon', 'Doe', 'en');
greet('Jon', 'Doe', 'es');

// this is just one pattern and a simple one
// this passes for you your intended parameter values rather than
// checking and setting the value as shown above 
function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

// this also helps distinguish between the two
greetEnglish('Jon', 'Doe');
greetSpanish('Jon', 'Doe');