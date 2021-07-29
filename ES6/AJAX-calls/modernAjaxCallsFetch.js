
const button = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const getJSON = function(url, errorMessage='Something went wrong...') {
    return fetch(url)
    .then(response => {
        if(!response.ok) throw new Error(`${errorMessage} ${response.status}`);
        return response.json();
    })
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

}

const renderError = function(message) {
    countriesContainer.insertAdjacentText('beforeend', message);
}


const getCountryData = function(country) {
    getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found!')
    .then(data => {
        const [jsonData] = data;
        renderCountryData(jsonData);

        const [neighbour] = jsonData.borders;
        if(!neighbour) throw new Error('No neighbour found!');

        return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found!') 
    })
    .then(jsonData => renderCountryData(jsonData, className="neighbour"))
    .catch(err => {
        console.error(err);
        renderError(`Something went wrong...\n${err.message}`);
    })
    .finally(() => countriesContainer.style.opacity = 1);// fetch returns a PROMISE immediately. It is pending.
    // very simple, as opposed to XMLHttpRequest, where we had to specify a lot of options just to get it working. (here, if no HTTP request is specified, then GET
    // is assumed.)

    // after a certain point, the promise will be SETTLED, and will be either fulfilled or rejected.
    // to handle the success state, we can chain the then() method to the request that produces a promise.
    // in then(), we pass a callback function that is to be executed as soon as the promise is fulfilled. As soon as the future value is available. It gets
    // one argument from JavaScript, which is the response object.
    // this response object contains our future value in the body property. We can use response's json() method to extract our data.
    // now, this json() method also returns a promise, which, again, we'll handle using then().

    // However, we are still using callbacks. Promises do not get rid of callbacks. They get rid of callback hell. By chaining the promises one after another,
    // we escape callback hell, and get a flat chain of promises.

    // catch() handles errors that may occur from the rejection of promises, from any then() method above it.
    // finally() is always called, no matter if the promise was accepted or rejected. Use it do something that always needs to happen, something that is not
    // contingent on the result of the settled promise. (e.g. hiding loading spinners)

    // We have to reject some errors from our side too. For example, the project comes rejected due to an internet connection. But, it does not get rejected
    // if there's no country found because we have misspelt the name. We have to handle that manually.
    // This is done through the ok property of the response object. If it is set to false, then we can know that the data did not come back in the way
    // that we expected.
    // throw keyword immediately terminates the function, like the return keyword.
    // The effect of creating an throwing an error in any of the then methods is that the promise is rejected immediately. That's what we wanted, for the
    // promise to reject when there's no country found.
    // This error also propagates down to the catch() method.
}

button.addEventListener('click', function() {
    getCountryData('pakistan');
})
