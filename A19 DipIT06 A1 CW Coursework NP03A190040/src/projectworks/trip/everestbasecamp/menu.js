var menuBtn = document.getElementById('mobile-nav');
var menu = document.getElementById('page-nav');
menuBtn.addEventListener('click',function(e){
	if (menu.style.display === "none") {
		menu.style.display="block";
	}
	else if (menu.style.display ==="block") {
		menu.style.display="none";
	}
	else{
		menu.style.display="block";
	}
});