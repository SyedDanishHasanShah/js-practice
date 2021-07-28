
const button = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();
    
//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
//         const html = `
//         <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👭️</span>${(+data.population / 1000000).toFixed(1)}M people</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰️</span>${data.currencies[0].name}</p>
//             </div>
//         </article>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//         countriesContainer.style.opacity = 1;
//     })
// }

// getCountryData('pakistan');
// getCountryData('switzerland');
// getCountryData('france');

// right now, we cannot control which AJAX call is completed first, since they are happening asynchronously. Lets change that and understand what callback
// hell is
// we will now display the neighbouring countries of our specified country. This can only be done after the first call has been made and we have acquired the
// neighbouring country data. So, we need to ensure that the neighbouring country data call does not happen first.

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

const getCountryAndNeighbourData = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();
    
    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);

        // render country
        renderCountryData(data);

        //render neighbour country
        const neighbours = data.borders;
        if (!neighbours) {
            return;
        }
        neighbours.forEach(function(el) {
            const requestTwo = new XMLHttpRequest();
            requestTwo.open('GET', `https://restcountries.eu/rest/v2/alpha/${el}`);
            requestTwo.send();
            requestTwo.addEventListener('load', function() {
                const dataTwo = JSON.parse(this.responseText);
                renderCountryData(dataTwo, 'neighbour');
            })
        });
        // Now, since this request is inside the callback of the original request (for Pakistan), now, this request will always happen after the request
        // made for Pakistan. Pakistan will always appear first in the display.
        // this pattern of having callbacks inside of callbacks inside of callbacks is known as callback hell. This is quite an ugly pattern that makes
        // code quite unreadable. This pattern arises out of the need to execute ASYNCHRONOUS tasks SEQUENTIALLY. To achieve our task, i.e. executing 
        // asynchronous code in a sequential way, while, at the same time, preserving the readability of our code, we use PROMISES.
        
    })
}

getCountryAndNeighbourData('pakistan');