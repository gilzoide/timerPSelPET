var div = document.getElementById ('timer');
var caixa1 = document.getElementById ('caixa1');
var caixa2 = document.getElementById ('caixa2');
var caixa3 = document.getElementById ('caixa3');
var caixa4 = document.getElementById ('caixa4');

// Apertou tecla. Se foi uma das que eu escolhi, põe o tempo especificado ali
// no div
document.body.onkeydown = function (e) {
	var c = String.fromCharCode (e.keyCode || e.charCode);
	if (c == 'Q') {
		if (caixa1.value) {
			div.innerHTML = caixa1.value;
		}
	}
	else if (c == 'W') {
		if (caixa2.value) {
			div.innerHTML = caixa2.value;
		}
	}
	else if (c == 'E') {
		if (caixa3.value) {
			div.innerHTML = caixa3.value;
		}
	}
	else if (c == 'R') {
		if (caixa4.value) {
			div.innerHTML = caixa4.value;
		}
	}
}

document.body.onkeyup = function () {
	setInterval (function () {
		
	}, 100);
}
