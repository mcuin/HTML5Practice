function setName() {

	localStorage.setItem("lastname", "Smith");

	document.getElementById("result").innerHTML = localStorage.getItem("lastname");

	localStorage.removeItem("lastname");
}

function setClick() {
	if (localStorage.clickcount) {
		localStorage.clickcount = Number(localStorage.clickcount) + 1;
	} else {
		localStorage.clickcount = 1;
	} 
	document.getElementById("result2").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s) in this browser.";
}

function setSession() {
	if (sessionStorage.clickcount) {
		sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
	} else {
		sessionStorage.clickcount = 1;
	} 
	document.getElementById("result3").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " times(s) in this session.";
}

