// Write a JavaScript function that takes a string 
// and returns the number of vowels in this string.  
function vowelCount(str){
     var count=0;
     var vowels="aeiou"
     for(var i=0;i<str.length;i++){
       if(vowels.indexOf(str[i])){
       count++;
       }
    // for(var j=0;j<vowels.length;j++){
    //     if(str[i]==vowels[j]){
    //     count++;
    //     }
    // }
     }
     return count;

}
var reasult =vowelCount("nadia")
console.log(reasult)