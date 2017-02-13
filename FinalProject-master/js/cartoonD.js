
	var cartoon = {
		render: function(){
			var alpha = document.getElementById("alpha");
			var spider = document.getElementById("spider");
			var doctor = document.getElementById("doctor");
			
		
			alpha.addEventListener("click", function(){
					
					$.ajax({

						type: "GET", 
						url:"http://gateway.marvel.com/v1/public/comics/60533?ts=1&apikey=151190ee7f20308356073cc2ea7cccd9&hash=2bd9a27c93a7e5a8db48d5925d22e2d2",
						success: function(data){
							console.log(data);

							var icon = document.getElementById("icon");
							icon.src = "http://i.annihil.us/u/prod/marvel/i/mg/c/60/588bdaa309ac8.jpg";
							
							var title = document.getElementById("title-name");
							title.textContent = data.data.results[0].title;
							
							var description = document.getElementById("description");
							description.textContent = data.data.results[0].description;
							
						}});

			});
			spider.addEventListener("click", function(){
					
					$.ajax({

						type: "GET", 
						url:"http://gateway.marvel.com/v1/public/comics/56474?ts=1&apikey=151190ee7f20308356073cc2ea7cccd9&hash=2bd9a27c93a7e5a8db48d5925d22e2d2",
						success: function(data){
							console.log(data);

							var icon = document.getElementById("icon");
							icon.src = "http://i.annihil.us/u/prod/marvel/i/mg/1/70/58544536c68d9.jpg";
							
							var title = document.getElementById("title-name");
							title.textContent = data.data.results[0].title;
							
							var description = document.getElementById("description");
							description.textContent = data.data.results[0].description;
							
						}});

			});
			doctor.addEventListener("click", function(){
					
					$.ajax({

						type: "GET", 
						url:"http://gateway.marvel.com/v1/public/comics/57946?ts=1&apikey=151190ee7f20308356073cc2ea7cccd9&hash=2bd9a27c93a7e5a8db48d5925d22e2d2",
						success: function(data){
							console.log(data);

							var icon = document.getElementById("icon");
							icon.src = "http://i.annihil.us/u/prod/marvel/i/mg/d/50/57eef5f7524fe.jpg";
							
							var title = document.getElementById("title-name");
							title.textContent = data.data.results[0].title;
							
							var description = document.getElementById("description");
							description.textContent = data.data.results[0].description;
							
						}});

			});
		

		}

	};
	cartoon.render();





