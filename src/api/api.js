const axios = require('axios')

(async () => {
    axios({
        method: 'get',
        url: 'https://fetedujour.fr/api/v2/mhWu5ze1N1fBq4bN/json-normal?api_key=mhWu5ze1N1fBq4bN',
        responseType: 'json'
    }).then(function (response) {
            console.log(response)
    });
})
