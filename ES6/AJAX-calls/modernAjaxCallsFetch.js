
const button = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
    const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        const [jsonData] = data;
        renderCountryData(jsonData);

        const [neighbour] = jsonData.borders;
        if(!neighbour) return;

        return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`) 
    })
    .then(response => response.json())
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
}

button.addEventListener('click', function() {
    getCountryData('pakistan');
})
