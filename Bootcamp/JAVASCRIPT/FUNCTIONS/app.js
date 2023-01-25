function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there,${firstName} ${lastName[0]}.`)
}

function repeat(str,numTimes) {
    let result = "";
    for (let i = 0; i <numTimes; i++) {
        result += str;
    }
    console.log(result);
}



function isSnakeEyes() {
    let dieOne = Math.floor((Math.random() * 6) + 1);
    let dieTwo = Math.floor((Math.random() * 6) + 1);
    console.log(dieOne,dieTwo)
        if (dieOne === 1 && dieTwo === 1) {
            console.log("Snake Eyes!")
        } else {
        console.log("Not Snake Eyes!")
    }
} 

function lastElement (array) {
    if (typeof array === 'undefined') {
        return typeof null;
    } else {
        return array[array.length - 1];
    }
}


function capitalize (str) {
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2 
}

function sumArray (array) {
    var total = 0;
    for (var i = 0; i < array.lenght; i += 1){
        total = total + array[i]
            return total;
    }
}


