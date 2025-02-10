
    
    const btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.addEventListener("click", ()=> {
        const url = `https://api.thecatapi.com/v1/images/search?limit=10=`
        
        fetch(url)
        .then((response)=> {
            if(!response.ok){
                throw new Error('Erro ao buscar dados')
            }
            return response.json()
        })
        .then((gatos)=>{
            imagens(gatos)
        })
        .catch((err) => {
            console.log(err)
        });
    });
    const imagens = (imagens) => {
        const gato = document.getElementById('gato')
        gato.textContent = gato.value
    }
