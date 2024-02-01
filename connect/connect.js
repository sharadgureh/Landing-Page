function emailSend(){
	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sharadgureh1212@gmail.com",
    Password : "2D34971FDBCD728FE4A5133C63F28ACC8C94",
    To : email,
    From : 'sharadgureh1212@gmail.com',
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "", "error");
  	}
  }
);
}