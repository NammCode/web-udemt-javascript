let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with  
re = /ld$/i; // Must end with  
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any character ONE time
re = /h*llo/i; // Matches any character ZERO or MORE time
re = /gre?a?y\?/i; //Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /gr[^ae]y/i; // Match anything except a G or F
re = /[A-Z]ray/; // Match any uppercase letter
re = /[A-Za-z]ray/; // Match any letters 
re = /[0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exatly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exatly {m} to {n} amount of times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parethese () - Grouping
re = /([0-9]x){3}/; // Match digitX 3 times

// Shorthand Character Classes
re = /h\ws/; // Word character - alphanumeric or _ [A-Za-z0-9_]
re = /h\w+s/; // + = one or more
re = /\W/; // Non-World character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 1 on more times
re = /\D/; // Match any Non-Digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?![ys])/; // Match x only if not followed by y or s

// String to match
const str = 'xd'; 

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);