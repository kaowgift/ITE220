<?php include("header.php") ?>
		<div class="container">
			<div class="row">
				<div class="col-md-4"></div>
				<div class="col-md-4">
					<div class="login-border">
						<h1 class="text-center">Sign Up</h1>
						<!-- Form -->
						<form action="registrationAction.php" method="POST">
							<strong>Username</strong>
							<input type="text" class="form-control" placeholder="Enter username.." name="username" />
							<strong>Email</strong>
							<input type="text" class="form-control" placeholder="Enter username.." name="email" />
							<strong>Password</strong> 
							<input type="password" class="form-control" placeholder="Enter password.." name="password" />
							<strong>Password Confirmation</strong> 
							<input type="password" class="form-control" placeholder="Enter password again.." name="passwordConfirm" />
							<br/>
							<button type="submit" class="btn btn-success btn-md btn-block">Create Account</button>
						</form>	
					</div>
				</div>
				<div class="col-md-4"></div>
			</div>
		</div>

<?php include("footer.php") ?>