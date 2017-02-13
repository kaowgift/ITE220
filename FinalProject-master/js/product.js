var game = {
	products : ["TOM CLANCYS GHOST", "Sniper Elite4", "Resident Evil7", "Nioh"," Naruto4 Road to Boruto", "Dead Rising4", "Dying Light", "Fifa17", "For Honor", "Gears Of Wars4", "Hitman", "Mafia III"],
	prices: [1790, 1890, 1890, 1990, 1690, 1590, 1290, 1790, 2190, 1890, 1490,1390],
	picture: ["https://pbs.twimg.com/profile_images/660946436801101824/niM7azZS.jpg"],

	displayProduct: function(){
		var productsText = " "; 
		var productsElement = document.getElementById("product_form");
		for (var i=0; i< this.products.length; i++){
			productsText += "<form action='https://www.paypal.com/cgi-bin/webscr' method='post'><div class='card' style='width: 20rem'><img class='card-img-top' src='" + this.picture[0] + "' alt='Card image cap'><div class='card-block'><h4 class='card-title'>" + this.products[i] + "</h4><p class='card-text'>Price: " + this.prices[i] + " Baths</p><input type='hidden' name='cmd' value='_cart' /><input type='hidden' name='add' value='1' /><input type='hidden' name='business' value='payment@nextlevel.com' /><input type='hidden' name='item_name' value='" + this.products[i] + "' /><input type='hidden' name='quantity' value='1' /><input type='hidden' name='amount' value='" + this.prices[i] +"' /><input type='hidden' name='currency_code' value='THB' /><input type='hidden' name='no_note' value='1'><input type='hidden' name='shipping' value='50'><input type='submit' name='submit' value='Add to cart' class='btn btn-primary' /></div></div></form>"
			//productsText += " <script>paypal.minicart.render();</script>";
		};
		// productsText += "<script>paypal.minicart.render();</script>";
		
		productsElement.innerHTML = productsText;

	}
}

game.displayProduct();
