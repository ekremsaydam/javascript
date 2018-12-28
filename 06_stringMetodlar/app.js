let value;

const firstName = "Louis";
const lastName = "Armstrong";
const langs = "Java,Python,C++";

value = firstName + " " + lastName;


value = "Mustafa Ahmet";

// value = value + " Ali";
value += " Ali"; // value = value + " ALi";

value = firstName.length;

value = firstName.concat(" ", lastName, " ", "Caz"); // firstName + " "

value = firstName.toLowerCase();

value = firstName.toUpperCase();

value = firstName[0];
value = firstName[2];
value = firstName[firstName.length - 1];


// indexOf

value = firstName.indexOf('L');
value = firstName.indexOf('l');

// charAt

value = firstName.charAt(0);
value = firstName.charAt(firstName.length - 1);

// split

value = langs.split(',');

// replace

// value = langs.replace('Python', 'CSS');
// value = value.split(',');

// include

value = langs.includes('Java');
value = langs.includes('Java2');
console.log(value);