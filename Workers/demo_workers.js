var v = 0;

function timedCount() {
	v = v + 1;
	postMessage(v);
	setTimeout("timedCount()", 500);
}

timedCount();
