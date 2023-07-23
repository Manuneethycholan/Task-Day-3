//a.  print odd numbers in an array

const arr = [3, 35, 372, 262, 563, 12, 85, 2, 3, 854, 3, 4, 34342, 7, 77646];

//Anonymous function
let oddnum = function () {
    console.log("Anonymous function");
    for (let i in arr) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i]);

        }

    }
}
oddnum();



//IIFE function
(function oddnumberfinder() {
    console.log("IIFE function");
    for (let i in arr) {
        if (arr[i] % 2 == 1) {
            console.log(arr[i]);
        }
    }
})();

// ------------------------------------------------------------------------------------------------

//b. Convert all the strings to title caps in a string array

const sent = ["This is a sample test to perform this specific function in anonymous and iife functions"]

//Anonymous function
let stringcaps = function (strr) {
    console.log("Anonymous function");
    let newstr = strr.toString().split(" ");
    for (let i in newstr) {
        newstr[i] = newstr[i][0].toUpperCase() + newstr[i].slice(1);
    }
    newstr = newstr.join(" ")
    console.log(newstr);

}
stringcaps(sent);

// IIFE function
(function (strr) {
    console.log("IIFE function");
    let newstr = strr.toString().split(" ");
    for (let i in newstr) {
        newstr[i] = newstr[i][0].toUpperCase() + newstr[i].slice(1);
    }
    newstr = newstr.join(" ")
    console.log(newstr);

})(sent);


// ------------------------------------------------------------------------------------------------

//c. sum of all the numbers in an array.

//Anonymous function
let sumof_arr = function (sumarr) {
    console.log("Anonymous function");
    let tot = 0;
    for (let i of sumarr) {
        tot += i;
    }
    console.log(tot);
}
sumof_arr(arr);

// IIFE function
(function (sumarr) {
    console.log("IIFE function");
    let tot = 0;
    for (let i of sumarr) {
        tot += i;
    }
    console.log(tot);
})(arr);


// ------------------------------------------------------------------------------------------------

//d. Return all the prime numbers in an array

//Anonymous function
let checkprime = function checkPrime(arrr) {
    console.log("Anonymous function");
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
                console.log(i + "is a prime number");
            }
        }
    }
}
checkprime(arr);


//IIFE function
(function checkPrime(arrr) {
    console.log("Anonymous function");
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
                console.log(i + "is a prime number");
            }
        }
    }
})(arr);

//--------------------------------------------------------------------------------------------------------------------

//e. Return all the palindromes in an array
const strarr = ["strings", "birdy", "kallak", "teacher", "plow", "santoshhsotnas", "malayalam"]

//Anonymous function
let palindromes = function (strarr) {
    console.log("Anonymous function")
    for (let i of strarr) {
        let temp = i;
        temp = temp.split("").reverse().join("");
        temp = temp.toString();
        if (i == temp) {
            console.log(i, "is a palindrome string");
        }
    }
}
palindromes(strarr);

//IIFE Functions
(function (strarr) {
    console.log("IIFE Functions");
    for (let i of strarr) {
        let temp = i;
        temp = temp.split("").reverse().join("");
        temp = temp.toString();
        if (i == temp) {
            console.log(i, "is a palindrome string");
        }
    }
})(strarr);


//--------------------------------------------------------------------------------------------------------------------------------
//f. Return median of two sorted arrays of the same size.

const ar1 = [1, 3, 4, 6, 9];
const ar2 = [2, 5, 7, 8, 10];

//Anonymous function
let median = function (ar1, ar2) {
    console.log("Anonymous function")
    let length = ar1.length;
    let newarr = ar1.concat(ar2);
    console.log(newarr);

    newarr = newarr.sort()
    let med = newarr[length] + newarr[length + 1];
    console.log("median is equal to ", med / 2);


}
median(ar1, ar2);

//IIFE Function
(function (ar1, ar2) {
    console.log("IIFE Functions");

    let length = ar1.length;
    let newarr = ar1.concat(ar2);
    console.log(newarr);

    newarr = newarr.sort()
    let med = newarr[length] + newarr[length + 1];
    console.log("median is equal to ", med / 2);


})(ar1, ar2);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//g .Remove duplicates from an array

//Anonymous function

const names = ['Sanjay', 'Diwas', 'Bala', 'Gokul', 'Sanjay', 'Diwas', "Sanjay", 'Diwas', 'Bala', 'Gokul'];

let rmdup = function (names) {
    console.log("Anonymous Function")
    return [...new Set(names)];
}
console.log(rmdup(names));



//IIfE Function
(function removeDuplicates(names) {
    console.log("IIFE Function")
    let unique = [];
    for (let i of names) {
        if (!unique.includes(i)) {
            unique.push(i);
        }
    }
    console.log(unique);
})(names);

//--------------------------------------------------------------------------------------------------------------------------------
//h. Rotate an array by k times
let samp_array = [1, 2, 3, 4, 5, 6]
let k = 3;

//anonymous function 


function rotate(sample_array) {
    let temp = sample_array[0];
    sample_array.splice(0, 1)
    sample_array.push(temp)
    console.log(sample_array)
}

let temprotate = function (array, k) {
    console.log("Anonymous Function")
    let i = 0;
    while (i < k) {
        let temp = array[i];
        // let position 
        rotate(array);
        i++;

    }
}
temprotate(samp_array, k);


//IIFE function
(function (array, k) {
    console.log("IIFE Function")
    let i = 0;
    while (i < k) {
        let temp = array[i];
        // let position 
        rotate(array);
        i++;

    }
})(samp_array, k);

