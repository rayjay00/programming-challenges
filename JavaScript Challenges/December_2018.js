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
