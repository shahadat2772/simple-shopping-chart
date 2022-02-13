// function updateProductNumber(product, price, isIncreasing) {
//   const productInput = document.getElementById(product + "-number");
//   let productNumber = productInput.value;
//   if (isIncreasing == true) {
//     productNumber = parseInt(productNumber) + 1;
//   } else if (productNumber > 0) {
//     productNumber = parseInt(productNumber) - 1;
//   }
//   productInput.value = productNumber;
//   // update total
//   const productTotal = document.getElementById(product + "-total");
//   productTotal.innerText = productNumber * price;
//   // calculate total
//   calculateTotal();
// }

// function getInputValue(product) {
//   const productInput = document.getElementById(product + "-number");
//   const productNumber = parseInt(productInput.value);
//   return productNumber;
// }

// function calculateTotal() {
//   const phoneTotal = getInputValue("phone") * 1219;
//   const caseTotal = getInputValue("case") * 59;
//   const subTotal = phoneTotal + caseTotal;
//   const tax = subTotal / 10;
//   const totalPrice = subTotal + tax;
//   // update on the html
//   document.getElementById("sub-total").innerText = subTotal;
//   document.getElementById("tax-amount").innerText = tax;
//   document.getElementById("total-price").innerText = totalPrice;
// }

// // phone increase decrease events
// document.getElementById("phone-plus").addEventListener("click", function () {
//   updateProductNumber("phone", 1219, true);
// });
// document.getElementById("phone-minus").addEventListener("click", function () {
//   updateProductNumber("phone", 1219, false);
// });

// // handle case increase decrease events
// document.getElementById("case-plus").addEventListener("click", function () {
//   updateProductNumber("case", 59, true);
// });
// document.getElementById("case-minus").addEventListener("click", function () {
//   updateProductNumber("case", 59, false);
// });

// CHART PRACTICE

function updateProductsQuantityAndPrice(isIncreasing, product, price) {
  var productQuantity = document.getElementById(product + "-number");
  if (isIncreasing == true) {
    productQuantity.value = parseInt(productQuantity.value) + 1;
  } else if (productQuantity.value > 0) {
    productQuantity.value = parseInt(productQuantity.value) - 1;
  }

  var productTotal = document.getElementById(product + "-total");
  productTotal.innerText = parseInt(productQuantity.value) * price;
  updateTotalPrice();
}

function updateTotalPrice() {
  var phoneTotal = document.getElementById("phone-total");
  var caseTotal = document.getElementById("case-total");

  var subTotal = document.getElementById("sub-total");
  var taxTotal = document.getElementById("tax-amount");
  var total = document.getElementById("total-price");

  subTotal.innerText =
    parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);

  taxTotal.innerText = parseInt(subTotal.innerText) / 10;

  total.innerText = parseInt(subTotal.innerText) + parseInt(taxTotal.innerText);
}

// EVENT LISTENER FOR THE PHONE BUTTONS
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductsQuantityAndPrice(true, "phone", 1219);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductsQuantityAndPrice(false, "phone", 1219);
});

// EVENT LISTENER FOR THE CASE BUTTONS
document.getElementById("case-plus").addEventListener("click", function () {
  updateProductsQuantityAndPrice(true, "case", 59);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductsQuantityAndPrice(false, "case", 59);
});
