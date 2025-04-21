/* 
?   Presidents Array
    Below the array you will find various prompts.
    Hint:
        - we know many array methods that can help us accomplish the prompts
*/

const presidents = [
  { first: "George", last: "Washington", year: 1732, passed: 1799 },
  { first: "John", last: "Adams", year: 1735, passed: 1826 },
  { first: "Thomas", last: "Jefferson", year: 1743, passed: 1826 },
  { first: "James", last: "Madison", year: 1751, passed: 1836 },
  { first: "James", last: "Monroe", year: 1758, passed: 1831 },
  { first: "John", last: "Adams", year: 1767, passed: 1848 },
  { first: "Andrew", last: "Jackson", year: 1767, passed: 1845 },
  { first: "Martin", last: "Van Buren", year: 1782, passed: 1862 },
  { first: "William", last: "Harrison", year: 1773, passed: 1841 },
  { first: "John", last: "Tyler", year: 1790, passed: 1862 },
  { first: "James", last: "Polk", year: 1795, passed: 1849 },
  { first: "Zachary", last: "Taylor", year: 1784, passed: 1850 },
  { first: "Millard", last: "Fillmore", year: 1800, passed: 1874 },
  { first: "Franklin", last: "Pierce", year: 1804, passed: 1869 },
  { first: "James", last: "Buchanan", year: 1791, passed: 1868 },
  { first: "Abraham", last: "Lincoln", year: 1809, passed: 1865 },
  { first: "Andrew", last: "Johnson", year: 1808, passed: 1875 },
  { first: "Ulysses", last: "Grant", year: 1822, passed: 1885 },
  { first: "Rutherford", last: "Hayes", year: 1822, passed: 1893 },
  { first: "James", last: "Garfield", year: 1831, passed: 1881 },
  { first: "Chester", last: "Arthur", year: 1829, passed: 1886 },
  { first: "Grover", last: "Cleveland", year: 1837, passed: 1908 },
  { first: "Benjamin", last: "Harrison", year: 1833, passed: 1901 },
  { first: "William", last: "McKinley", year: 1843, passed: 1901 },
  { first: "Theodore", last: "Roosevelt", year: 1858, passed: 1919 },
  { first: "William", last: "Taft", year: 1857, passed: 1930 },
  { first: "Woodrow", last: "Wilson", year: 1856, passed: 1924 },
  { first: "Warren", last: "Harding", year: 1865, passed: 1923 },
  { first: "Calvin", last: "Coolidge", year: 1872, passed: 1933 },
  { first: "Herbert", last: "Hoover", year: 1874, passed: 1964 },
  { first: "Franklin", last: "Roosevelt", year: 1882, passed: 1945 },
  { first: "Harry", last: "Truman", year: 1884, passed: 1972 },
  { first: "Dwight", last: "Eisenhower", year: 1890, passed: 1969 },
  { first: "John", last: "Kennedy", year: 1917, passed: 1963 },
  { first: "Lyndon", last: "Johnson", year: 1908, passed: 1973 },
  { first: "Richard", last: "Nixon", year: 1913, passed: 1994 },
  { first: "Gerald", last: "Ford", year: 1913, passed: 2006 },
  { first: "Jimmy", last: "Carter", year: 1924, passed: 2024 },
  { first: "Ronald", last: "Reagan", year: 1911, passed: 2004 },
  { first: "George H.", last: "Bush", year: 1924, passed: 2018 },
  { first: "Bill", last: "Clinton", year: 1946, passed: undefined },
  { first: "George W.", last: "Bush", year: 1946, passed: undefined },
  { first: "Barack", last: "Obama", year: 1961, passed: undefined },
  { first: "Donald", last: "Trump", year: 1946, passed: undefined },
  { first: "Joseph", last: "Biden", year: 1942, passed: undefined },
];

// How many presidents have we had?
console.log('The total number of presidents is:', presidents.length);

// Create a list of all presidents that are alive. 
console.log('This is a list of living presidents:');
let living = presidents.filter(function(l) {
  if (l.passed === undefined) {
      console.log(l);
  }
});

// Create a list of all presidents that have passed away.
console.log('This is a list of deceased presidents:');
let deceased = presidents.filter(function(d) {
  if (d.passed !== undefined) {
      console.log(d);
  }
});

/* 
      - Using a forEach, loop through the presidents and have it console.log() first name, last name, & was XX years old when they died. 
      - We only want the presidents who have passed away to be displayed.
  */
console.log('This is a list of presidents sorted by age at death: ')
let sortedByAgePassed = presidents
.filter(p => p.passed !== undefined)
.sort((a, b) => (a.passed - a.year) - (b.passed - b.year)); 
sortedByAgePassed.forEach(p => {
  let agePassed = p.passed - p.year;
  console.log(p.first, p.last, 'Age at Death:', agePassed);
  });

/* 
      - Create an array of the presidents still living.
      - For every living president, calculate their current age.
  */
 console.log('This is a list of living presidents and their current age: ')
presidents.forEach(p => {
  if(p.passed === undefined) {
    let currentYear = 2025
    let currentAge = currentYear - p.year;  
    console.log (p.first , p.last , 'Current Age:' , currentAge);
    }
});

//Average Life Span the sum of all dead presidents ages (reduce)/the total number of dead presidents
let totalLifespan = presidents
.filter(p => p.passed !== undefined)
.reduce((total, p) => total + (p.passed - p.year), 0);
let deceasedCount = presidents.length;
let aveLifespan = totalLifespan / deceasedCount;
console.log ('The average lifespan of a president is' , aveLifespan.toFixed(0));

//Longest/Shortest living president
let oldestPres = presidents
.filter(p => p.passed !== undefined)
.sort((a, b) => (b.passed - b.year) - (a.passed - a.year))[0]; 
console.log(oldestPres.first , oldestPres.last , 'was the longest living president living until age' , oldestPres.passed - oldestPres.year);
let youngestPres = presidents
.filter(p => p.passed !== undefined)
.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))[0]; 
console.log(youngestPres.first , youngestPres.last , 'was the shortest living president living until age' , youngestPres.passed - youngestPres.year);

//Group presidents by century of birth
let presByCentury = Object.groupBy(presidents,(p)=>{
  let century = Math.ceil(p.year / 100) + "th Century";
  return century;
});
  for (let century in presByCentury){
  console.log (century);
  presByCentury[century].forEach(p => {
    console.log(p.first , p.last , p.year);
  });
}