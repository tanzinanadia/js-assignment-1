// Write a JavaScript program to find the greatest common divisor (GCD) of two positive numbers using recursion.
// function gcd(num1,num2){
//      if(num1%num2==0){
//         return num2;
//      }
// }
// var result=gcd(30,35)
// console.log(result)

var answer=0;
for(var i=0;i<35;i++){
   if((35%i==0) && (20%i==0)){
    answer =i;
   }
}
console.log(answer)