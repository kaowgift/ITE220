<?php include("header.php") ?>
		<div class="container">
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					<div class="login-border">
						<h1 class="text-center">Sign In</h1>

						<!-- Form -->
						<form action="loginAction.php" method="POST">
							<strong>Username</strong>
							<input type="text" class="form-control" placeholder="Enter username.." name="username" maxlength="15"/>
							<br/>	
							<strong>Password</strong> 
							<input type="password" class="form-control" placeholder="Enter password.." name="password" />
							<a href="XXX">Forgot password?</a>
							<br/><br/>
							<button type="submit" class="btn btn-primary btn-md btn-block">Login</button>
						</form>	

						<!-- Registration -->
						<hr/>
						<a href="registration.php" class="btn btn-default btn-md btn-block" role="button">Sign Up</a>
					</div>
				</div>
				<div class="col-md-4"></div>
			</div>
		</div>
<?php include("footer.php") ?>