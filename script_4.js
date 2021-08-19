const prompt = require('prompt-sync')();

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log(" Between 1970 1980")
entrepreneurs.forEach(entrepeneurContent => {
  year = entrepeneurContent.year;
  if(year >= 1970 && year < 1980) {
  console.log(year)
  }
});

console.log("first and last name")
entrepreneurs.forEach(entrepeneurContent => {
  first = entrepeneurContent.first;
  last = entrepeneurContent.last;
  fullName = first + " " + last
  console.log(fullName)
});

console.log("Quel age en 2021 ?")
entrepreneurs.forEach(entrepeneurContent => {
  year = entrepeneurContent.year;
  today = 2021 - year
  first = entrepeneurContent.first;
  last = entrepeneurContent.last;
  fullName = first + " " + last
  console.log(`${fullName} is ${today} year's old`)
});

console.log(" Sort last name ")
function dynamicSort(property) {
  return function (a,b) {
      {
          return a[property].localeCompare(b[property]);
      }
  }
}
entrepreneurs.sort(dynamicSort("last"));
console.log(entrepreneurs);