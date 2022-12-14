// let random = Math.random()
// if ( random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// }
// else {
//     console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
// }
// console.log(random);




// const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

// if (dayOfWeek === "monday") {
//     console.log("UGHHH I HATE MONDAYS!")
// } 
// else if (dayOfWeek === "saturday") {
//     console.log("YAY I LOVE SATURDAYS!")
// }
// else if (dayOfWeek === "friday") {
//     console.log("FRIDAY ARE DECENT,ESPECIALLY AFTER WORK")
// }
// else {
//     console.log("MEH")
// }




// 0-5 -FREE
// 5-10 CHILD $10
// 10-65 ADULT $20
// 65+ SENIOR $10

// const age = 8

// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// }
// else if (age < 10) {
//     console.log("You are a child. You pay $10")
// }
// else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// }




const password = prompt("please enter a new password");

if ( password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!")
}
else{
    console.log("PASWORD TOO SHORT! Must be 6+ characters")
}

if (password.indexOf(" ") === -1) {
    console.log("Good job! No space!")
}
else{
    console.log("Password cannot contain spaces")
 }