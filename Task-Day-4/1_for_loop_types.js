// 1. For the given JSON iterate over all the loops(for,for in,for Of, forEach)

let sample_data = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

// to iterate over all the items colour and print from the json using for
console.log("for loop")
for (let z = 0; z < sample_data.length; z++) {

    console.log(sample_data[z].color, sample_data[z].value)
}

console.log("\n")

// to iterate over all the items colour and print from the json using for in
console.log("for in loop")
for (let i in sample_data) {
    console.log(sample_data[i].color, sample_data[i].value)
}

console.log("\n")

// to iterate over all the items values and print from the json using for of
console.log("for of loop")
for (let z of sample_data) {
    console.log(z.color, z.value)
}

console.log("\n")

// to iterate over all the items values and print from the json using forEach
console.log("forEach loop in a arrow function")
sample_data.forEach((element) => console.log(element.color, element.value));

console.log("\n")



