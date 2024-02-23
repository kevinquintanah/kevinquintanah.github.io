const apiKey = 'kevinapy';

function callApiWithHttpRequest() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            document.getElementById('resultado').innerHTML = this.responseText;
        }
    });

    xhr.open('GET', `https://restcountries.com/v3.1/name/mexico`);
    xhr.send(data);
}

async function callApiWithFetch() {
    const url = `https://restcountries.com/v3.1/name/mexico`;
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('resultado').innerHTML = JSON.stringify(result);
    } catch (error) {
        console.error(error);
    }
}

function callApiWithJQueryLocal() {
    $.get('https://restcountries.com/v3.1/name/mexico', function(data) {
        $('#resultado').html(JSON.stringify(data));
    });
}

function callApiWithJQueryCDN() {
    $.get('https://restcountries.com/v3.1/name/mexico', function(data) {
        $('#resultado').html(JSON.stringify(data));
    });
}

