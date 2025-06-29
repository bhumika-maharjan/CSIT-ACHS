// ################## Character Classes

// Any character except newline
let anyChar = "Hello! How are you? \n I'm fine.";
console.log(anyChar.match(/./g)); // Matches each character except newline
console.log(anyChar.match(/\./g));

// Word, digit, whitespace
let wdws = "Hello123_ 456?";
console.log(wdws.match(/\w/g)); // Matches all word characters [H,e,l,l,o,1,2,3,_]
console.log(wdws.match(/\d/g)); // Matches all digits [1,2,3,4,5,6]
console.log(wdws.match(/\s/g)); // Matches all whitespace characters [" "]

// Not word, digit, whitespace
console.log(wdws.match(/\W/g)); // Matches non-word characters [" "]
console.log(wdws.match(/\D/g)); // Matches non-digit characters [H,e,l,l,o, ,_ ]
console.log(wdws.match(/\S/g)); // Matches non-whitespace characters [H,e,l,l,o,1,2,3,4,5,6]

// Any of a, b, or c
let abcMatch = "apple banana cherry";
console.log(abcMatch.match(/[abc]/g)); // Matches [a,b,a,a,a,c]

// Not a, b, or c
console.log(abcMatch.match(/[^abc]/g)); // Matches all characters except a, b, or c [p,p,l,e, ,n,n,n, ,h,e,r,r,y]

// Character between a & g
console.log(abcMatch.match(/[a-g]/g)); // Matches [a,a,e,a,a,a,c,e,e]

// ################## Anchors

// Start / end of the string
let anchor = "abc";
let anchor2 = "abc bcd abc apple";
let anchor3 = "abc bcd abc apple abc";
console.log(/^abc$/.test(anchor)); // true, exact match from start to end
console.log(anchor2.match(/^abc/g)); // matches abc of start
console.log(anchor2.match(/abc$/g)); // no match
console.log(anchor3.match(/abc$/g)); // matches abc of end

// Word, not-word boundary
let boundary = "hello world";
console.log(boundary.match(/\bworld\b/)); // Matches ["world"]
console.log(boundary.match(/\Bworld\B/)); // No match as "world" is not surrounded by word characters

// ################## Escaped Characters
// Escaped special characters
let escaped = "The dot is here.";
console.log(escaped.match(/\./g)); // Matches ["."]
let star = "Star*";
console.log(star.match(/\*/g)); // Matches ["*"]
let backslash = "Backslash\\";
console.log(backslash);
console.log(backslash.match(/\\/g)); // Matches ["\\"]
console.log(backslash.match(/\\/g)[0]); // \

// Tab, linefeed, carriage return
let specialChars = "Tab\tLinefeed\nCarriage Return\r";
console.log(specialChars.match(/\t/)); // Matches ["\t"]
console.log(specialChars.match(/\n/)); // Matches ["\n"]
console.log(specialChars.match(/\r/)); // Matches ["\r"]

// ########################### Quantifiers & Alternation
// 0 or more, 1 or more, 0 or 1(plus non greedy or minimum)
let quantifiers = "aa a aaa aaaa";
console.log(quantifiers.match(/a*/g)); // Matches ["aa","","a","","aaa","","aaaa",""]
console.log(quantifiers.match(/a+/g)); // Matches ["aa","a","aaa","aaaa"]
console.log(quantifiers.match(/a?/g)); // Matches ["a","a","","a","","a","","a","a","","a","a","a","a","a",""]

// Exactly five, two or more
let exact = "aaaaa aaaaaa";
console.log(exact.match(/a{5}/g)); // Matches ["aaaaa","aaaaa"]
console.log(exact.match(/a{2,}/g)); // Matches ["aaaaa","aaaaaa"]

// Between one & three
let range = "a aa aaa aaaa";
console.log(range.match(/a{1,3}/g)); // Matches ["a","aa","aaa","aaa", "a   "]

// Match as few as possible
let minimal = "aaaaaa";
console.log(minimal.match(/a+?/g)); // Matches ["a","a","a","a","a","a"]
console.log(minimal.match(/a{2,}?/g)); // Matches ["aa","aa","aa"]

// Match ab or cd
let alternation = "abc ab cd";
console.log(alternation.match(/ab|cd/g)); // Matches ["ab","ab","cd"]

// ######################  Groups & Lookaround
// Capture group
let text = "The quick brown fox jumps over the lazy dog.";
let matchResult = text.match(/(quick) (brown) (fox)/);
console.log(matchResult);

let date1 = "2024-06-23";
let dateMatch = date1.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(dateMatch);
// Output: ["2024-06-23", "2024", "06", "23"]
// Output: [Exact match, capturing group 1, capturing group 2, capturing group 3]

let date2 = "2024-06-23";
let reformattedDate = date2.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
console.log(reformattedDate);
// Output: "23/06/2024"

// Backreference to group #1
// Define a regex with multiple capture groups and backreferences
const regex = /(foo)(bar)\2\1/;

// Test strings
const str1 = "foobarbarfoo";
const str2 = "foobarfoo";

// Using regex.test to check if the strings match the pattern
console.log(regex.test(str1)); // true
console.log(regex.test(str2)); // false
console.log(regex.exec(str1));
console.log(str1.match(regex));
console.log(str2.match(regex));

// Non-capturing group
let nonCapturing = "redapple";
console.log(nonCapturing.match(/(?:red)apple/)); // Matches ["redapple"]
console.log(nonCapturing.match(/(red)apple/)); // Matches ["redapple", "red"]

// Positive lookahead
let lookahead = "I have 100 dollars.";
console.log(lookahead.match(/\d+(?= dollars)/)); // Matches ["100"]
//  matches 100 followed by "space dollars" but does not include "space dollars"

// Negative lookahead
const strNegLook = "123abc456";
console.log(strNegLook.match(/\d{3,}(?!abc)/));
// matches digits if it is not followed by abc

// regexr.com
