var num = parseInt(prompt("Enter any nymber"));

for (var i=2 ;i<num;i++){
   var result = num % i;
   if(result==0){
    console.log("Number is not prime")
    break;

   }

   else{
    console.log("Its a prime number")
   }
}