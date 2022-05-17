const main = document.getElementById('main-market')
const selectProducts = document.getElementById('select-products')

window.addEventListener('load', loadSelect);
selectProducts.addEventListener('change', elementSelected);

function elementSelected(event) {
    // 1. Recorrer el array
    products.map(element => {
      if (event.target.value === element.name) {
        nameProduct = element.name
        imgProduct = element.img
        priceProduct = element.price
      }
    })
    createCard(nameProduct, imgProduct, priceProduct)
  }

function loadSelect() {
    products.map(element => {
        const opt = document.createElement('option');
        opt.textContent = element.name;
        opt.value = element.name;
        selectProducts.appendChild(opt);
    })
}

function createCard(nameProduct, imgProduct, priceProduct) {
  const button2 = document.createElement('button')
  const card = document.createElement('div');
  const imgCard = document.createElement('img');
  const title = document.createElement('h3');
  const price = document.createElement("p");
  // const button = document.createElement("button");
  imgCard.setAttribute('src',imgProduct);
  imgCard.setAttribute('alt',nameProduct);
  title.textContent = nameProduct;
  price.textContent = priceProduct;
  // button.textContent = "Añadir al carrito"
  button2.textContent = "X"
  card.appendChild(button2)
  card.appendChild(imgCard);
  card.appendChild(title);
  card.appendChild(price);
  main.appendChild(card);
  // card.appendChild(button);
  card.classList.add("cardPrueba");
  // button.classList.add("buttonAdd");
  imgCard.classList.add("img-card");
  title.classList.add('title-card')
  button2.classList.add('eliminar')
  price.classList.add('p-price')
  button2.addEventListener("click", element => {main.removeChild(card)});
//   card.classList.remove("cardPrueba")
}


products.map(element=>{ console.log(element.name)});