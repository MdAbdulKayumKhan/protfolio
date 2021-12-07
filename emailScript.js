function sendMail() {
	
	var tempParams ={
		from_name:document.getElementById("fromName").value;
		to_name:document.getElementById("toName").value;
		message:document.getElementById("msg").value;
	};
	console.log(tempParams)

	emailjs.send('service_976n0jj', 'template_2czntcx', tempParams)
	.then(function(res){
		console.log("success", res.status);
	})
}