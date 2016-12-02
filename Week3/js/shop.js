var customerName = "Ratra";
var price = 10;
var quantity = 2;
var totalPrice = price * quantity;

var customerElement = document.getElementById("customer");
customerElement.textContent = customerName;

var customerElement = document.getElementById("total");
customerElement.textContent = totalPrice;
