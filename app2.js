function updateProductQuantityAndPrice(isIncreasing, product, price) {
  var inputNumber = document.getElementById(product + "-number");
  var productQuantity = parseInt(inputNumber.value);
  if (isIncreasing) {
    inputNumber.value = productQuantity + 1;
  } else if (productQuantity > 0) {
    inputNumber.value = productQuantity - 1;
  }
  document.getElementById(product + "-total").innerText =
    parseInt(inputNumber.value) * price;

  getTheTotalAmount();
}

function getTheTotalAmount(params) {
  var phoneTotal = document.getElementById("phone-total").innerText;
  var phoneTotalInNumber = parseInt(phoneTotal);

  var caseTotal = document.getElementById("case-total").innerText;
  var caseTotalInNumber = parseInt(caseTotal);

  var subTotal = document.getElementById("sub-total");
  subTotal.innerText = phoneTotalInNumber + caseTotalInNumber;

  var taxTotal = document.getElementById("tax-amount");

  var totalTaxAmount = parseInt(subTotal.innerText) / 10;

  taxTotal.innerText = totalTaxAmount;

  var totalPrice = document.getElementById("total-price");
  totalPrice.innerText =
    parseInt(taxTotal.innerText) + parseInt(subTotal.innerText);
}

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductQuantityAndPrice(true, "phone", 1219);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductQuantityAndPrice(false, "phone", 1219);
});

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductQuantityAndPrice(true, "case", 59);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductQuantityAndPrice(false, "case", 59);
});
