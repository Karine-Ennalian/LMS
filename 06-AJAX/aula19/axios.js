axios({
    method: 'GET',
    URL: 'https://jsonplaceholder.typicode.com/posts',
}).then(
    function(){
        // executada quando requisição for terminada com sucesso
        console.log('deu bom')
    }
).catch(
    function(){
        // executada quando requisição for terminada com erro
        console.log('deu ruim')
    }
)