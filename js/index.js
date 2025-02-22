// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');//25.00
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')//0
  let result = Number(price.innerHTML)/* 25.00 */ * Number(quantity.value);/* 0 or 1 or 3.... */
  subtotal.innerHTML = result;
  return result;
}

// ITERATION 2
function calculateAll() {
  let eachElement = document.getElementsByClassName('product');

  let subTotal = 0;
  for (let i = 0; i < eachElement.length; i++) {
    subTotal += updateSubtotal(eachElement[i]);
  }
  
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  total.innerHTML = subTotal;
}

// ITERATION 4

function removeProduct(event) {
  let target = event.currentTarget;
  let tr = document.querySelector('.product');
  console.log('The target in remove is:', target.parentNode.parentNode.parentNode.removeChild(tr));
}

// ITERATION 5

function createProduct() {
  let newName = document.querySelector('.create-product input');
  let newPrice = document.querySelector('.create-product input[type= "number"]');
  let fixedPrice = Number(newPrice.value).toFixed(2);
}

window.addEventListener('load', () => {
  let btn = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', removeProduct);
  }
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
