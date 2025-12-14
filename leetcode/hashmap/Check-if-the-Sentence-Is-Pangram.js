/*  
Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false 
*/

function checkIfPangram(sentence){
    // const set = new Set();
    // for(let i = 0; i < sentence.length; i++){
    //     let charc = sentence.charAt(i);
    //     set.add(charc);
    // }
    // return set.size === 26;
    return new Set(sentence).size == 26
};
console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))