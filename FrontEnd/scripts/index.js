

const addData = async (products)=>{
    const mainHTML =document.getElementById('products-section');
    mainHTML.innerHTML = '';
    const list = document.createElement('li');
    products.forEach(product => {
        console.log(product);
        const item = document.createElement('div');
        const name = document.createElement('h1');
        const image = document.createElement('img');
        const price = document.createElement('h2');
        const descr = document.createElement('p');
        name.textContent = product.name;
        image.src = product.imageUrl;
        image.alt = product.name;
        image.width= 200;
        price.textContent = '$'+product.price;
        descr.textContent = product.description;
        item.append(name);
        item.append(image);
        item.append(price);
        item.append(descr);
        list.appendChild(item);
    });
    mainHTML.appendChild(list);
    console.log(mainHTML);
};


const getData = async ()=>{
    const url='http://localhost:8000/'
    const response = await fetch(url);
    console.log(response);
    const resData= await response.json();
    addData(resData.products);
};

document.addEventListener('DOMContentLoaded', getData);