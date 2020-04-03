
let form = document.getElementById("contactform");
var btnsubscribe = document.getElementById("btnsubscribe");
var btnsignup = document.getElementById("btnsignup");

if(localStorage.formdata === undefined){
	localStorage.setItem('formdata', JSON.stringify([]));
}

let contactData = JSON.parse(localStorage.getItem('formdata'));


function validate()
{
	let toReturn;
	if (btnsubscribe.value=="") {
		console.log("Field is missing a value");
		toReturn = false;
	}else{
		toReturn =  true;
	}

	return toReturn;

}

btnsignup.addEventListener('click', e => {
	e.preventDefault();

	if(validate()){
		let data = {
			'btnsubscribe': btnsubscribe.value,
		};

		contactData.push(data);
		localStorage.setItem('formdata', JSON.stringify(contactData));
		alert('Thank you for your email');
	}else{
		alert('Some fields are missing!');
	}

})



