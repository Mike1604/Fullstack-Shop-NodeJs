/* const paragraph = document.getElementById('parra');
const boton = document.getElementById('fetchButton');

boton.addEventListener('click', async function(){
    const resp = await fetch('http://localhost:8000/');
    console.log(resp);
    if(resp.status === 200){
        const div = document.createElement('div');
        div.innerText = 'Everything Fine! :)';
        document.body.append(div);
    }
    const data = await resp.json();
    console.log(data);
}); */