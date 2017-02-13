<?php include("header.php") ?>
<br />

<section id="Game Products">
  <div class="section-content">
    <div class="container">
		<h1 style="font-size: 20px">Game Products</h1>
    <hr />
      <div class="row">
        <div class="col-sm-12">
          <div class="card-group" id="product_form">
			   <form action="https://www.paypal.com/cgi-bin/webscr" method="post">
			     <div class="card" style="width: 20rem;">
  			   <img class="card-img-top" src="img/2.jpg" alt="Card image cap">
  			     <div class="card-block">
    		      <h4 class="card-title">TOM CLANCY'S GHOST RECON WILDLANDS</h4>
    		      <p class="card-text">Price: 1,790 Baths</p>
    		      <input type="hidden" name="cmd" value="_cart" />
        	    <input type="hidden" name="add" value="1" />
        	    <input type="hidden" name="business" value="payment@nextlevel.com" />
        	    <input type="hidden" name="item_name" value="TOM CLANCY'S GHOST RECON WILDLANDS" />
        	    <input type="hidden" name="quantity" value="1" />
              <input type="hidden" name="amount" value="1790.00" />
        	    <input type="hidden" name="currency_code" value="THB" />
        	    <input type="hidden" name="no_note" value="1">
        	    <input type="hidden" name="shipping" value="50">
        	    <input type="submit" name="submit" value="Add to cart" class="btn btn-primary" />
  			     </div>
       		 </div>
		     </form>

          
	     </div>


	   </div>
	 </div>
	</div>
</div>
</section>
	<br />
	 
<?php include("footer.php") ?>
<!-- <script type="text/javascript" src="js/minicart.js"></script>
        
        
        <script>
        paypal.minicart.render();
        </script>
-->
 <script type="text/javascript" src="js/product.js"></script> 
 <script src="//cdnjs.cloudflare.com/ajax/libs/minicart/3.0.6/minicart.min.js"></script>
 <script>
  paypal.minicart.render();

        
        </script>
