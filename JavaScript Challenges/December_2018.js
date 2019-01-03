// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(str){
    const strArr = str.split(' ');
    strArr.map((word, index) => {
    if(word.length >= 5) {
        strArr[index] = word.split('').reverse().join('');
        
        }
    });
    return strArr.join(' ');
}



//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    const string = str.split("");
    string.shift();
    string.pop();
    return string.join("");
};

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(names) {
    if(names.length === 0) { 
        return  'no one likes this';
    } else if (names.length === 1) {
        return `${names.join("")} likes this`
    } else if (names.length === 2) {
        return `${names.join(" and ")} like this`
    } else if (names.length === 3)  {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
  }
