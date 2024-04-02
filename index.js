/* Task 1

var texte1 = ""

if (texte1.length === 0) {
    console.log(`The text is empty.`);
} else {
    console.log(`The text is not empty.`);
}

*/

/* Task 2
texte2 = function (str) {
    return str.trim().split(" ");
};

console.log(texte2("Røyken Videregående Skole"));
*/

/* Task 3
Source: https://stackoverflow.com/questions/14813369/palindrome-check-in-javascript

function PalindromChecker(palindrome) {
    for (var i = 0; i < palindrome.length / 2; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
            console.log('The word is not a palindrome.');
            return;
        }
    }
    console.log('The word is a palindrome.');
}

PalindromChecker('');
*/

/* Task 4
function texte3(str){
    return str.split('').sort().join('')
}
  console.log(texte3("serdar"))
*/


/* Task 5
const text4 = "Welcome to Norge";
const bokstav = "o";
const z = lese(text4, bokstav);

function lese(text4, bokstav) {
    let count = 0;
    for (let char of text4) {
        if (char === bokstav) count++;
    }
    return count;
}
console.log("Occurrences of '" + bokstav + "' in the text:", z);
*/

/* Task 6
const texte5 = 'ABRACADABRAA';
const m = 3;
for (i = 0; i < texte5.length; i += m){
    console.log(texte5.substr(i, m));
}
*/
