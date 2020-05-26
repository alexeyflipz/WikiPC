function confpass (){
	var password1 = document.getElementById('pass1');
	var password2 = document.getElementById('pass2');

	if (pass1.value !== pass2.value) {
		alert('Password mismatch');
		return false;
	}
}

