import peticionApi from './bases/11-Axios'


const getImage = async() =>{
    try {
        
        const {data} = (await peticionApi.get('/random')).data
        const {url } = data.images.original
        console.log(url)

        const img = document.createElement('img')
        img.src = url;
        document.body.append(img)



    } catch (error) {
        console.log('Error en la peticion', error);
    }
}


getImage()
.then()
.catch( error =>{

})