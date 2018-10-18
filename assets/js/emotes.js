function fun(rotate) {
	rotate += 17.9;
	document.getElementById("body").setAttribute("style", "transform:rotate(" + rotate + "deg);");
  return rotate;
}

function transform(e, i, j) {
	document.getElementById(e).style.webkitTransform = "rotate(" + i + "deg) scale(" + j + ")";
	document.getElementById(e).style.mozTransform = "rotate(" + i + "deg) scale(" + j + ")";
	document.getElementById(e).style.transform = "rotate(" + i + "deg) scale(" + j + ")";
}

function shuffle(o) { // http://jsfromhell.com/array/shuffle
	for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function stepo(t) {
	var slide = 0;
	var rotspeeds = [1, -2, 4];
	var yearstop = 0;
	var monies = 0;
	if (slide == 0) {
		for (k = 0; k < jids.length; k++) {
			if (jgoing[k]) {
				document.getElementById(jids[k]).value = jthings[k][t % jthings[k].length];
			}
		}
		if (!jgoing[3] && jgoing[13]) {
			document.getElementById('j14').value = jcities[yearstop][0][t % 4];
		}
		if (!jgoing[3] && jgoing[14]) {
			document.getElementById('j15').value = jcities[yearstop][1][t % 4];
		}
	}
	t += rotspeeds[slide];
	transform("glowo", t, 1);
	transform("wagon", Math.sin(t / 5), 0.5 + Math.sin(t / 25) / 30);
	if (isClock) {
		clocks += 1;
		document.getElementById('clock').value = clocks;
	}
  return t;
}

$(window).on('load', function () {
	var t = 0;
	var slide = 0;
	var rotspeeds = [1, -2, 4];
	var yearstop = 0;
	var monies = 0;
	var rotate = 0;
  
  var rotateButton = document.getElementById('rotate-button');
  rotateButton.onclick = function () {
    rotate = fun(rotate);
  }

	for (k = 0; k < jids.length; k++) {
		shuffle(jthings[k]);
	}

	window.setInterval(function() { t = stepo(t); }, 33);

	function jstop(l) {}
});