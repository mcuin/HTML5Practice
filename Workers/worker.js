function startWorker() {
	if (typeof(Worker) !== "undefined") {
		if (typeof(w) == "undefined" {
			w = new Worker("demo_workers.js");
		}
		w.onmessage = function(event) {
			document.getElementById("count").innerHTML = event.data;
		};
	} else {
		document.getElementById("count").innerHTML = "Sorry, no worker support.";
	}
} 

function stopWorker() {
	w.terminate();
	w = undefined;
}
