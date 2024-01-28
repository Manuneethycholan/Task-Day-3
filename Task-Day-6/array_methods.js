
//  1.  Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

// ----------------------------------------------------------------------------------------------------------------------------------------



const rawdata = new XMLHttpRequest();

rawdata.open('GET', 'https://restcountries.com/v3.1/all');

rawdata.onload = function () {
  const countries = JSON.parse(rawdata.responseText);
    //   console.log(countries);

// a. Get all the countries from Asia continent /region using Filter function
console.log("----------------------------------------------------------------------------------------------------------------------------------------")
    console.log("Countries within asia region")
    const coun =countries.filter((country) => country.region === 'Asia')
    console.log(coun)


// b.  Get all the countries with a population of less than 2 lakhs using Filter function
console.log("----------------------------------------------------------------------------------------------------------------------------------------")
    console.log("Countries with population less than 200000")
    const count = countries.filter((country) => country.population < 200000)
    console.log(count)
    
// c. Print the following details name, capital, flag, using forEach function
console.log("----------------------------------------------------------------------------------------------------------------------------------------")
    console.log("Printing countries name , capital , flag ")
    countries.forEach(element => {
        console.log("Name of the country ", element.name.common);
        console.log("Capital of the country", element.capital[0]);
        console.log("Flag of the country", element.flag);
    });

// d. Print the total population of countries using reduce function
console.log("----------------------------------------------------------------------------------------------------------------------------------------")
console.log("countries total population, using reduce function")





}

rawdata.send()

