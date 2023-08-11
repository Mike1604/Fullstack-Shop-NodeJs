import { loadProducts } from "./LoadProducts.js";


const getData = async ()=>{
    const url='http://localhost:8000/'
    try{
        const response = await fetch(url);
        console.log(response);
        const resData= await response.json();
        loadProducts(resData.products);
    }catch(err){
        console.log(err);
        const container = document.createElement('div');
        const warning = document.createElement('h1');
        warning.textContent = 'Sorry, the page you are looking for does not work :(';
        container.append(warning);
        container.classList.add('warning');
        const mainHTML =document.getElementById('products-section');
        mainHTML.appendChild(container);
    }
    
};

document.addEventListener('DOMContentLoaded', getData);