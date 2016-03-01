var div = document.getElementById ('timer');
var caixa1 = document.getElementById ('caixa1');
var caixa2 = document.getElementById ('caixa2');
var caixa3 = document.getElementById ('caixa3');
var caixa4 = document.getElementById ('caixa4');
var timer = 0;
var taRolando;
// função que para o timer
function paraTimer () {
	clearInterval (taRolando);
}

String.prototype.toMMSS = function () {
	var sec_num = parseInt (this, 10); // don't forget the second param
	var minutes = Math.floor (sec_num / 60);
	var seconds = sec_num - (minutes * 60);

	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var time = minutes + ':' + seconds;
	return time;
}

// Apertou tecla. Se foi uma das que eu escolhi, põe o tempo especificado ali
// no div
document.body.onkeydown = function (e) {
	var c = String.fromCharCode (e.keyCode || e.charCode);
	if (c == 'Q') {
		if (caixa1.value) {
			paraTimer ();
			div.innerHTML = caixa1.value.toMMSS ();
			timer = parseInt (caixa1.value);
		}
	}
	else if (c == 'W') {
		if (caixa2.value) {
			paraTimer ();
			div.innerHTML = caixa2.value.toMMSS ();
			timer = parseInt (caixa2.value);
		}
	}
	else if (c == 'E') {
		if (caixa3.value) {
			paraTimer ();
			div.innerHTML = caixa3.value.toMMSS ();
			timer = parseInt (caixa3.value);
		}
	}
	else if (c == 'R') {
		if (caixa4.value) {
			paraTimer ();
			div.innerHTML = caixa4.value.toMMSS ();
			timer = parseInt (caixa4.value);
		}
	}
}

document.body.onkeyup = function (e) {
    var c = String.fromCharCode (e.keyCode || e.charCode);
    if ('QWER'.includes (c)) {
		paraTimer ();
		taRolando = setInterval (function () {
			if (timer > 0) {
				timer = timer - 1;
				div.innerHTML = timer.toString ().toMMSS ();
			}
			else {
				paraTimer ();
			}
		}, 1000);
    }
}
