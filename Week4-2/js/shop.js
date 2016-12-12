// var customerName = "Ratra";
// var products = [
// 	"Brookln T-Shirt White",
// 	"Brookln T-Shirt Black",
// 	"Apple Watch",
// 	"Android Phone"
// ];
// var prices = [10, 10, 199, 159];
// var price = 10;
// var quantity = 2;
// var priceDiscount;
// //var totalPrice = price * quantity;

// var customerElement = document.getElementById("customer");
// customerElement.textContent = customerName;

// // var customerElement = document.getElementById("total");
// // customerElement.textContent = totalPrice;

// var productsText = " ";
// var productsElement = document.getElementById("product-list");

// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[0]
// + "</span>" + products[0] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[1]
// + "</span>" + products[1] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[2]
// + "</span>" + products[2] + "</li>";
// productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[3]
// + "</span>" + products[3] + "</li>";

// productsElement.innerHTML = productsText;

// totalPrice = prices[0] + prices[1] + prices[2] + prices[3];
// priceDiscount = totalPrice * 25/100;
// var totalPriceElement = document.getElementById("total");
// totalPriceElement.textContent = totalPrice - priceDiscount;


// var timeElement = document.getElementById("time");
// var dt = new Date().getHours();
// if (dt >= 0 && dt <= 11){
//  timeElement.textContent = "Good Morning, ";
// }else if (dt >= 12 && dt <= 17){
//  timeElement.textContent = "Good Afternoon, ";
// }else {
//  timeElement.textContent = "Good Evening, ";
// }

var shop = {
	customerName: "Ratra",
	totalPrice: 0,
	products: [
		"Brooklyn T-Shirt Watch",
		"Brookln T-Shirt Black",
		"Apple Watch",
		"Android Phone"
	],
	prices: [10,10,199,159],

	displayCustomerName: function() {
		var customerElement = document.getElementById("customer-name")
		customerElement.textContent = this.customerName;
	},
	displayProductList: function(){
		var productsText = "";
		var productsElement = document.getElementById("product-list");

		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[0]
		+ "</span>" + this.products[0] + "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[1]
		+ "</span>" + this.products[1] + "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[2]
		+ "</span>" + this.products[2] + "</li>";
		productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[3]
		+ "</span>" + this.products[3] + "</li>";

		productsElement.innerHTML = productsText;

	},
	calculateTotalPrice: function(){
		return (this.prices[0] + this.prices[1] +this.prices[2]+ this.prices[3]) * 0.75;
	},
	displayTotalPrice: function(){
		this.totalPrice = this.calculateTotalPrice();
		var totalPriceElement = document.getElementById("total");
		totalPriceElement.textContent = this.totalPrice;
	}
}

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();


