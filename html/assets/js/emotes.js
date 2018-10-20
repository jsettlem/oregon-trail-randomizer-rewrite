function fun(rotate) {
	rotate += 17.9;
	document.getElementById("body").setAttribute("style", "transform:rotate(" + rotate + "deg);");
	return rotate;
}

function transform(e, i, j) {
	document.getElementById(e).style.webkitTransform = "rotate(" + i % 360 + "deg) scale(" + j + ")";
	document.getElementById(e).style.mozTransform = "rotate(" + i % 360 + "deg) scale(" + j + ")";
	document.getElementById(e).style.transform = "rotate(" + i % 360 + "deg) scale(" + j + ")";
  /* I do i % 360 to ensure the amount of memory required to store the rotation is
   * kept low, especially when the browser window is open for a very long time.
   * I doubt it will ever cause much of a performance hit, but I'm doing it anyway
   * just to make sure it doesn't become a performance problem.
   */
}

function shuffle(o) { // http://jsfromhell.com/array/shuffle
	for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function stepo(t) {
	var slide = 0;
	var rotspeeds = [1, -2, 4];
	var yearstop = 0;
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

var monies = 0;
/* This variable has to be declared outside the method body
 * or else it will be overwritten every time it is called.
 * To ensure "$x dollars cash," is not reset to 0, NaN, or undefined,
 * the variable is stored here.
 */
function jstop(l) {
	if (l == 99) {
		isClock = false;
		document.getElementById('clock').style.background = "#E0E0E0 url('assets/img/arrow.png') no-repeat right";
	}
	l = l - 1;
	if (l < 13 || !jgoing[3]) {
		jgoing[l] = false;
		if (l < 13) {
			document.getElementById(jids[l]).style.background = "#E0E0E0 url('assets/img/arrow.png') no-repeat right";
		}
		if (l == 13) {
			document.getElementById('j14').style.background = "#E0E0E0 url('assets/img/arrow.png') no-repeat right";
		}
		if (l == 14) {
			document.getElementById('j15').style.background = "#E0E0E0 url('assets/img/arrow.png') no-repeat right";
		}
		if (l == 1) {
			document.getElementById("jskills").value = jjobs[1][origjobs.indexOf(document.getElementById(jids[1]).value)];
			monies = monies + jjobs[0][origjobs.indexOf(document.getElementById(jids[1]).value)];
		}
		if (l == 4) {
			document.getElementById("jwagon").value = "$" + wprices[origwagons.indexOf(document.getElementById(jids[4]).value)];
			monies = monies - wprices[origwagons.indexOf(document.getElementById(jids[4]).value)];
		}
		if (l == 3) {
			yearstop = document.getElementById(jids[l]).value - 1840;
		}
	}
	if (l == 5) {
		document.getElementById("wagon").src = "assets/img/" + document.getElementById(jids[l]).value + ".png";
		document.getElementById("emote").src = "assets/sounds/" + document.getElementById(jids[l]).value + ".ogg";
		document.getElementById("emote").load();
		document.getElementById("emote").play();
	}
	document.getElementById("jmoney").value = "$" + monies;
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

	window.setInterval(function () {
		t = stepo(t);
	}, 33);
});
