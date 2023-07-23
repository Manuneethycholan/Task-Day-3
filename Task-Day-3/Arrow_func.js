// Do the below programs in arrow functions.


// Arrow Functions
// this cannot be hoisted
// this will be used throughout the course
const arrowFunc = () => {
    console.log('arrow function');
    return 'Arrow function';
}

arrowFunc();

// a. Print odd numbers in an array
const arr = [3, 35, 372, 262, 563, 12, 85, 2, 3, 854, 3, 4, 34342, 7, 77646];

let oddnum = () => {
    console.log("Anonymous function");
    let temper = []
    for (let i in arr) {
        if (arr[i] % 2 == 1) {
            // console.log(arr[i]);
            temper.push(arr[i]);
        }

    }
    return temper
}
console.log(oddnum());




// b. Convert all the strings to title caps in a string array
const sent = ["This is a sample test to perform this specific function in anonymous and iife functions"]


let stringcaps = (strr) => {
    let newstr = strr.toString().split(" ");
    for (let i in newstr) {
        newstr[i] = newstr[i][0].toUpperCase() + newstr[i].slice(1);
    }
    newstr = newstr.join(" ")
    return newstr;
}
console.log(stringcaps(sent));




//c. Sum of all numbers in an array


let sumof_arr = (sumarr) => {
    let tot = 0;
    for (let i of sumarr) {
        tot += i;
    }
    return tot;
}
console.log(sumof_arr(arr));




// d. Return all the prime numbers in an array

const checkprime = (arrr) => {
    let tem_lis = [];
    for (let i of arrr) {
        let flag = 1;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                flag = 0;
                break;
            }
        }

        if (flag == 1) {
            {
                tem_lis.push(i);
            }
        }
    }
    return tem_lis;
}
console.log("All these are Prime Numbers: ", checkprime(arr));




// Return all the palindromes in an array

const strarr = ["strings", "birdy", "kallak", "teacher", "plow", "santoshhsotnas", "malayalam"]

let palindromes = (strarr) => {
    let emptyy = [];
    for (let i of strarr) {
        let temp = i;
        temp = temp.split("").reverse().join("");
        temp = temp.toString();
        if (i == temp) {
            emptyy.push(i);
        }
    }
    return emptyy
}
console.log("All these items are palindromes", palindromes(strarr))
