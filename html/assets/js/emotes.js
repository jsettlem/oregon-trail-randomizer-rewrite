"use strict";
// Global variables
var yearstop = 0;

function fun(rotate) {
	rotate += 17.9;
    /* 17.9 is a brilliant value.
     * I've calculated (n*17.9)%360 in Python and Excel to n=10,000,
     * and it is never 0 (i.e. even if you press that button 10,000
     * times, it will not go back to being perfectly level).
     * There might be floating point errors that I am not noticing,
     * but I tried both Python and Excel, which is good enough for me.
     * Whoever originally created this, good job.
     */
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
		for (var k = 0; k < jids.length; k++) {
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

function playIntro() {
  var audioElement = document.getElementById("intro");
  audioElement.load();
  audioElement.play();
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

function preloadImages(imageUrls) {
  imageUrls.forEach((imageUrl) => {
    var preloadedImage = new Image();
    preloadedImage.src = imageUrl;
  });
}

$(window).on('load', function () {
	var t = 0;
	var slide = 0;
	var rotspeeds = [1, -2, 4];
	//var yearstop = 0;
	var monies = 0;
	var rotate = 0;

	var rotateButton = document.getElementById('rotate-button');
	rotateButton.onclick = function () {
		rotate = fun(rotate);
	}

	for (var k = 0; k < jids.length; k++) {
		shuffle(jthings[k]);
	}
  
  // Event handlers
  $('#wagon').on('click', playIntro);
  $('#j1').on('click', function() {
    jstop(1);
  });
  $('#j2').on('mouseup', function() {
    jstop(2);
  });
  $('#j3').on('mouseup', function() {
    jstop(3);
  });
  $('#j4').on('mouseup', function() {
    jstop(4);
  });
  $('#j5').on('mouseup', function() {
    jstop(5);
  });
  $('#j9').on('mouseup', function() {
    jstop(9);
  });
  $('#j10').on('mouseup', function() {
    jstop(10);
  });
  $('#j11').on('mouseup', function() {
    jstop(11);
  });
  $('#j12').on('mouseup', function() {
    jstop(12);
  });
  $('#j13').on('mouseup', function() {
    jstop(13);
  });
  $('#j14').on('mouseup', function() {
    jstop(14);
  });
  $('#j15').on('mouseup', function() {
    jstop(15);
  });
  $('#clock').on('mouseup', function() {
    jstop(99);
  });

  // Preload images
  var images = ['assets/img/arrow.png'];
  preloadImages(images);

	window.setInterval(function () {
		t = stepo(t);
	}, 33);
});
