const apiKey = 'kevinapy';

function displayCountryInfo(country) {
    const countryInfo = `
        <h1>${country.name.common}</h1>
        <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
        <p><strong>Official Name:</strong> ${country.name.official}</p>
        <p><strong>Capital:</strong> ${country.capital[0]}</p>
        <p><strong>Population:</strong> ${country.population}</p>
        <p><strong>Currency:</strong> ${country.currencies.MXN.name} (${country.currencies.MXN.symbol})</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Subregion:</strong> ${country.subregion}</p>
        <p><strong>Languages:</strong> ${Object.values(country.languages).join(', ')}</p>
        <p><strong>Timezones:</strong> ${country.timezones.join(', ')}</p>
        <p><strong>Area:</strong> ${country.area} km²</p>
        <p><strong>Borders:</strong> ${country.borders.join(', ')}</p>
        <p><strong>Gini Index:</strong> ${country.gini['2018']}</p>
        <p><strong>Google Maps:</strong> <a href="${country.maps.googleMaps}" target="_blank">View on Google Maps</a></p>
        <p><strong>OpenStreetMaps:</strong> <a href="${country.maps.openStreetMaps}" target="_blank">View on OpenStreetMaps</a></p>
    `;
    document.getElementById('resultado').innerHTML = countryInfo;
}

function redirectTo(apiType) {
    switch (apiType) {
        case 'HttpRequest':
            callApiWithHttpRequest();
            break;
        case 'Fetch':
            callApiWithFetch();
            break;
        case 'JQueryLocal':
            callApiWithJQueryLocal();
            break;
        case 'JQueryCDN':
            callApiWithJQueryCDN();
            break;
        default:
            break;
    }
}

function callApiWithHttpRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/name/mexico');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText)[0];
                displayCountryInfo(data);
            } else {
                console.error('Failed to fetch data');
            }
        }
    };
    xhr.send();
}

async function callApiWithFetch() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/name/mexico');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayCountryInfo(data[0]);
    } catch (error) {
        console.error(error);
    }
}

function callApiWithJQueryLocal() {
    $.getJSON('https://restcountries.com/v3.1/name/mexico', function(data) {
        console.log(data); // Verifica la estructura de los datos recibidos
        if (data && data.length > 0) {
            displayCountryInfo(data[0]);
        } else {
            console.error('Failed to fetch data or data is empty');
        }
    });
}

function callApiWithJQueryCDN() {
    $.getJSON('https://restcountries.com/v3.1/name/mexico', function(data) {
        console.log(data); // Verifica la estructura de los datos recibidos
        if (data && data.length > 0) {
            displayCountryInfo(data[0]);
        } else {
            console.error('Failed to fetch data or data is empty');
        }
    });
}
