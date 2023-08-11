
const loadProductDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const mainHTML = document.getElementById('product-detail');
    const url='http://localhost:8000/product/64cd57ccffee331643c3a527'
    try{
        const res = await fetch(url);
        const resData = await res.json();
        console.log(resData.product);
    }catch(err){

    }
};

loadProductDetails();