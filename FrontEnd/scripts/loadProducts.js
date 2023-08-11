const clickCardHandler = (e) => {
  if (e.target.tagName === 'DIV') {
    window.location.href = `productDetail.html?id=${e.target.id}`;
  }
  else if (e.target.tagName === "BUTTON") {
    console.log(e.target.parentNode.parentNode);
  }else {
    window.location.href = `productDetail.html?id=${e.target.parentNode.id}`;
  }
};


export const loadProducts = async (products) => {
  const mainHTML = document.getElementById('products-section');
  console.log(mainHTML);
  mainHTML.innerHTML = '';
  const container = document.createElement('div');
  container.classList.add('products-container')
  products.forEach(product => {
    const item = document.createElement('div');
    const name = document.createElement('h1');
    const image = document.createElement('img');
    const price = document.createElement('h2');
    const descr = document.createElement('p');
    name.textContent = product.name;
    image.src = product.imageUrl;
    image.alt = product.name;
    image.width = 200;
    price.textContent = '$' + product.price;
    descr.textContent = product.description;
    item.append(name);
    item.append(image);
    item.append(price);
    item.append(descr);

    const actions = document.createElement('div');
    const buy = document.createElement('button');
    buy.textContent = 'Add To Cart';
    actions.append(buy);
    actions.classList.add('actions-div');
    item.append(actions);

    item.id = product._id.toString();

    item.classList.add('card')

    item.addEventListener('click', clickCardHandler);

    container.appendChild(item);
  });
  mainHTML.appendChild(container);
};
