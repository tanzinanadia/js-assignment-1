// Write a JavaScript function that takes a string and returns the longest word within the string.
// Test:
// Input: “Full Stack Bootcamp with DEV ZeroOne”
// Output: “Bootcamp”
function longWord(str){
    var string= str.split(" ");
    var maxLength=0;
    var longString=string[0]
    for(var i=0;i<string.length;i++){
       if(string[i].length>longString.length){
        longString =string[i]
       }
    }
    return  longString;
}
var result=longWord("Full Stack Bootcamp with DEV ZeroOne")
console.log(result)