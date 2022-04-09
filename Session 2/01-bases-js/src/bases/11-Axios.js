import axios from 'axios'

const apiKey = "tg4BNUV0dc2H9mUHaAxjHCaUwN3qA1dU"
//https://api.giphy.com/v1/gifs/random?api_key=tg4BNUV0dc2H9mUHaAxjHCaUwN3qA1dU

const peticion = axios.create({
    baseURL : 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey 
    }
})



peticion.get('/random')
    .then((response) =>{

        const {data} = response.data;
        const {url} = data.images.original;

        const img = document.createElement('img')
        img.src = url;
        document.body.append(img)

    })

    export default peticion