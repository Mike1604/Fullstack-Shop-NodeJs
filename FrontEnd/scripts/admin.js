
const nameInput = document.getElementById('nameProduct');
const numberInput = document.getElementById('priceProduct');
const descrInput = document.getElementById('prodDecrip');

const inputChangeHandler = (e) =>{
    if(e.target.value.trim().length === 0){
        e.target.classList.add('invalid');
    }else{
        e.target.classList.remove('invalid');
    }
};

nameInput.addEventListener('input', inputChangeHandler);
numberInput.addEventListener('input', inputChangeHandler);
descrInput.addEventListener('input', inputChangeHandler);

const addProductButton = document.getElementById('add-product');

addProductButton.addEventListener('click', async function(e){
    e.preventDefault();
    const name = nameInput.value;
    const price = numberInput.value;
    const descr = descrInput.value;
    const product = {
        name: name,
        price: price,
        descr: descr
    }
    const response = await fetch('http://localhost:8000/admin/add-product',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),  
    });
    const data = await response.json();
    console.log(data);
    console.log(product);
    nameInput.value = "";
    numberInput.value = "";
    descrInput.value = "";
    window.location.replace(`/FrontEnd/views/index.html`);
});
