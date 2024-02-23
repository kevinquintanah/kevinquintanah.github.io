const apiKey = 'hqKfVW4dAseJ7M79kFRY4tTLBjnigJO0fug8tXet';

function callApiWithHttpRequest() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            document.getElementById('resultado').innerHTML = this.responseText;
        }
    });

    xhr.open('GET', `https://api.nasa.gov/DONKI/CME?startDate=2022-01-01&endDate=2022-01-02&api_key=${apiKey}`);
    xhr.send(data);
}

async function callApiWithFetch() {
    const url = `https://api.nasa.gov/DONKI/CME?startDate=2022-01-01&endDate=2022-01-02&api_key=${apiKey}`;
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


