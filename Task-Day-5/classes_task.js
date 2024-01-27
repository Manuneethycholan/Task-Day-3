
// 1. Movie Class https://github.com/rv.sp/typescript-oops/blob/master/Practice/Movie.md


console.log("1. Movie Class https://github.com/rv.sp/typescript-oops/blob/master/Practice/Movie.md")
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getmoviedetails() {
        console.log(`
            The Movie Title is ${this.title}
            Movie is made in the studio ${this.studio}
            Rating for this movie is ${this.rating}
            `);
    }
};

const firstMovie = new Movie("Kavatar", "Pixar", "UT");
firstMovie.getmoviedetails();

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const secondMovie = new Movie("Casino Royale", "Eon Productions", "PG13");
secondMovie.getmoviedetails();

const thirdMovie = new Movie("White Tiger", "Studio Green", "R");
thirdMovie.getmoviedetails();

const fourthMovie = new Movie("Salaar", "Hombale");
fourthMovie.getmoviedetails();

const fifthMovie = new Movie("Shooter", "Max-8", "PG");
fifthMovie.getmoviedetails();



// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
let arr1 = [firstMovie, secondMovie, thirdMovie, fourthMovie, fifthMovie];

function getPG(any_arr) {
    let arr2 = []
    for (let i in any_arr) {
        // console.log(any_arr[i])
        if (any_arr[i].rating == "PG") {
            arr2.push(any_arr[i])
        }
    }
    return arr2;
}
const returned_move_array_of_PG_ratings = getPG(arr1);
console.log(returned_move_array_of_PG_ratings);

// ---------------------------------------------------------------------------------// ---------------------------------------------------------------------------------
// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

console.log("https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md")

class CircleClass{
    constructor(radius, colour){
        this.radius= radius;
        this.colour= colour;

    }

    getCircumference() {

        return 2 * Math.PI * this.radius;
    }

    getDiameter() {

        return 2* this.radius;
    }

    getArea() {

        return Math.PI * (this.radius * this.radius)
    }

    getColor(){

        return this.colour
    }

}

const firstcirc = new CircleClass(4,"blue");
console.log("The circumference of the circle is " , firstcirc.getCircumference());
console.log("The diameter of the circle is", firstcirc.getDiameter());
console.log("The area of the circle is ",firstcirc.getArea());
console.log("The colour of the circle is ", firstcirc.getColor());


// ---------------------------------------------------------------------------------// ---------------------------------------------------------------------------------
// 3 . person class to hold all the details.


console.log("3 . person class to hold all the details.")

class Person {
    constructor(name, age, country, isSingle) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.isSingle = isSingle;
    }

    personDetails() {
        console.log(`
      Name: ${this.name}
      Age: ${this.age}
      Country: ${this.country}
      isSingle:${this.isSingle}`);
    }
}

const person1 = new Person('krishkaran', 4, 'Uk');
const person2 = new Person('Arunaa', 8, 'Greens');
const person3 = new Person('tarunaa', 12, 'Spain');
const person4 = new Person('Harunaa', 13, 'France');

person1.personDetails()
person2.personDetails()
person3.personDetails()
person4.personDetails()


// --------------------------------------------------------------------------------// ----------------------------------------------------------------------------------
// 4. write a class to calculate the Uber price."


console.log("4. write a class to calculate the Uber price.")

class Uber {
    constructor(cName, travel_dist, discount_percentage) {
        this.cName = cName;
        this.travel_dist = travel_dist;
        this.discount_percentage = discount_percentage;
    }

    rideCharges(distance) {
        let pricePerKm = 20;
        return pricePerKm * distance
    }

    getcustDetails() {
        console.log(`
        Customer Name is ${this.cName}
        Customer Travelled distance is ${this.travel_dist} KM
        Customer Pending amount to be paid is Rs:${this.pending_amount}
        Customer Current Ride Charges is Rs:${this.rideCharges(this.travel_dist)}
        `)
    }

    getTotalCharges(){
    let current_charges = this.rideCharges(this.travel_dist);
    let discount_amount = (this.discount_percentage/100) * current_charges
    let final_amount =  current_charges-discount_amount
    return final_amount
    }

}

const customer1 = new Uber("krishkaran", 15, 5)
customer1.getcustDetails()

const ubercharges = customer1.getTotalCharges()
console.log(ubercharges)

