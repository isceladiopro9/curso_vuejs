const apiKey = "tg4BNUV0dc2H9mUHaAxjHCaUwN3qA1dU"
//https://api.giphy.com/v1/gifs/random?api_key=tg4BNUV0dc2H9mUHaAxjHCaUwN3qA1dU

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then( response => response.json())
.then(({data}) =>{
    const {url} = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
})
.catch(error => {
    console.log('A ocurrido un error al conectar con el servidor');
})