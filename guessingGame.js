var num=prompt("Enter any number from 1 to 10");
num= parseInt(num);

if (num == 7){
    console.log('Bingo! Correct answer!!')
}
else if (num+1 == 7 || num-1 ==7){
    console.log("Close enough to the correct answer!")

}
else {
    console.log("Try again!")
}