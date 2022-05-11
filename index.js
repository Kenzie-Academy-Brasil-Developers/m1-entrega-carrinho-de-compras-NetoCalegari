// const productsCart = [
//     {
//         id: 1,
//         name: "",
//         price: 0.00
//     }
// ]
const body = document.querySelector('body');

const main = document.createElement('main');
body.appendChild(main);

const products = [
  {
    nome: 'Sabonete',
    preco: 2.99
  },
  {
    nome: 'Macarrão',
    preco: 4.39
  }
];

const productList = document.createElement('ul');
main.appendChild(productList);
main.classList.add('shoppingCart');

function totalSum() {
  let sum = 0;

  for (let i = 0; i < products.length; i++) {
    sum += products[i].preco;
  };
  
  return sum;
};

function createLi() {
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement('li')
    const productName = document.createElement('p');
    const productPrice = document.createElement('p');

    productName.innerText = products[i].nome;
    productPrice.innerText = products[i].preco;

    productList.appendChild(li);
    productList.appendChild(productName);
    productList.appendChild(productPrice);

  };
};

createLi()

const sum = totalSum();

const sumValue = document.createElement('p');
sumValue.innerText = sum;

const sumText = document.createElement('p');
sumText.innerText = 'Total';

const button = document.createElement('button');
button.innerText = 'Finalizar';

const productsDetails = document.createElement('section')

productsDetails.appendChild(button);
productList.appendChild(sumText)
productList.appendChild(sumValue);
main.appendChild(productsDetails);

const legenda = document.createElement('div');

const itemText = document.createElement('p')
itemText.innerText = 'Item';

const itemValue = document.createElement('p');
itemValue.innerText = 'Valor';