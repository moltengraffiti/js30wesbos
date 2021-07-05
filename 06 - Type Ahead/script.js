const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
      
const cities = [];


//fetch returns a promise
// const prom = fetch(endpoint);
// console.log(prom);

//Doens't return the data, alos doesn't know the data type
// fetch(endpoint).then(blob => console.log(blob));

//using the json from the blob response prototye returns another promise that we need to call then() on.
// fetch(endpoint).then(blob => blob.json());

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
    //if we use cities.push(data) we'll end up with an array of length 1, an array of an array
    //se we use ES6 spread operator
    //TODO - look at spread
    
//console.log(cities);
    

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
searchInput.addEventListener('change', displayMatches);

function displayMatches() {
   // console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    console.log(matchArray);

    const htmlList = matchArray.map(place => {
//we want to highlight the matching found text, se we replace the 
//found string with a class highlighted string of the entered text
    const regex = new RegExp(this.value, 'gi');
    const foundCity = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
       const foundState = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

    
        return ` 
        <li>
        <span class ="name"> ${foundCity}, ${foundState}</span> 
        </li>`
    }).join('')
    suggestions.innerHTML = htmlList;
}

//find what's typed and filter the list
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //look for a match in cities or states
        //need to create a regex to pass a variable in
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex);
    });
    
}



//Not suitable due to THIS
// display2 =() => {
//     console.log(`In the display 2 arrow function`)
//     console.log(this.value);
// }


