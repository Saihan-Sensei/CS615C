function getISSPos(){
	fetch("http://api.open-notify,org/iss-now.json")
	.then((response) => {
		response = response.json();
	})
	.then((data)=> {
		console.log(data);
		document.getElementById("iss_data").inerText = data
	});
	}