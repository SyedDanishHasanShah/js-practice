
const countriesContainer = document.querySelector('.countries');

const getPosition = function() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err));
    })
}

const renderError = function(message) {
    countriesContainer.insertAdjacentText('beforeend', message);
}

const renderCountryData = function(data, className='') {
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👭️</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰️</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}

const whereAmI = async function() {
    try {
        const position = await getPosition();
        const { latitude: lat, longitude: lng } = position.coords;
        const geoCoding = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!geoCoding.ok) {
            throw new Error('Problem getting location data!');
        }
        const data = await geoCoding.json();
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
        // await will stop the code execution at this point of the function until the fetch promise is fulfilled. Stopping function here, inside an async function,
        // is not a problem, because this function is running asynchronously in the background. It is not blocking the main thread.
        if (!res.ok) {
            throw new Error('Problem getting country data!');
        }
        const [ countryData ] = await res.json();
    
        renderCountryData(countryData);
        return `You are in ${data.city}, ${data.country}`;
    }
    catch (err) {
        renderError('Something went wrong...');
        // if we want to handle this error outside, then we have to throw it
        throw err;
    }
}

// console.log('1 getting the data');
// const myLocation = whereAmI().then(res => console.log(`2 ${res}`)).catch(err => console.error(`2 ${err}`)).finally(() => console.log('3 finished getting location'))
// an async function always returns a promise. At this point, the promise will be pending. We have to use the then() method to do something with
// the fulfilled value of the promise, and catch for the rejected value. If we use it without them, then we will get a Promise Pending object. Anything that is
// returned from an async function becomes the fulfilled value of the promise.

// However, mixing async/await with then() catch() should ideally be avoided. We should always use async/await if we can. Since, await cannot be used outside
// an async context, so lets use an iife to accomplish the above but with async/await

// NOTE: always wrap your async functions in a try catch block.

// If we have multiple promises, such as getting the data from three countries, and these promises do not depend on the result of the previous promises,
// then we should run them in parallel to save time. This is done through the Combinator Promise.all() function. It  takes in an array of promises, 
// and we have to simply await the Promise.all(), and get the data from all the calls at the same time. However, if even one promise rejects, 
//then all of the promises are rejected. One rejected promise short circuits all of the other promises.

(async function() {
    console.log('1 Getting the data');
    try {
        const myLocation = await whereAmI();
        console.log(`2 ${myLocation}`);
    }
    catch(err) {
        console.log(`2 ${err}`);
    }
    console.log(`3 got the data`);
})();