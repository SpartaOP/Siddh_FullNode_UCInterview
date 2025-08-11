const axios = require('axios');

axios.get('https://api.animechan.io/v1/quotes/random')
    .then(response => {
        console.log('Response: ', response.data);
    })
    .catch(error => {
        console.error('Error fetching: ', error.message);
    });