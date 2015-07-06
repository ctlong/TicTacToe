var array= ["0-0","0-1","0-2","1-0","1-1","1-2","2-0","2-1","2-2"];

function addX(str) {
	document.getElementById(str).innerHTML = "X";
}

function addO(str) {
	document.getElementById(str).innerHTML = "O";
}

function runThrough(str) {
	if(checker()) {
		document.getElementById("end-game").innerHTML = "Game Over";
	}
	else {
		if(document.getElementById(str).innerHTML == "O" || document.getElementById(str).innerHTML == "X") {
			runThrough(array[prompt()]);
		}
		else {
			addX(str);
			if(checker()) {
				document.getElementById("end-game").innerHTML = "Game Over";
			}
			else {
				var x = Math.round(Math.random()*8);
				var y = array[x];
				while(document.getElementById(y).innerHTML == "O" || document.getElementById(y).innerHTML == "X") {
					x = Math.round(Math.random()*8);
					y = array[x];
				}
				addO(y);
			}
		}
	}
}

function checker() {
	if(returnValue(array[0]) == "X" && returnValue(array[1]) == "X" && returnValue(array[2]) == "X") {
		return true;
	}
	else if(returnValue(array[0]) == "O" && returnValue(array[1]) == "O" && returnValue(array[2]) == "O") {
		return true;
	}
	else if(returnValue(array[3]) == "O" && returnValue(array[4]) == "O" && returnValue(array[5]) == "O") {
		return true;
	}
	else if(returnValue(array[3]) == "X" && returnValue(array[4]) == "X" && returnValue(array[5]) == "X") {
		return true;
	}
	else if(returnValue(array[6]) == "O" && returnValue(array[7]) == "O" && returnValue(array[8]) == "O") {
		return true;
	}
	else if(returnValue(array[6]) == "X" && returnValue(array[7]) == "X" && returnValue(array[8]) == "X") {
		return true;
	}
	else if(returnValue(array[0]) == "O" && returnValue(array[3]) == "O" && returnValue(array[6]) == "O") {
		return true;
	}
	else if(returnValue(array[0]) == "X" && returnValue(array[3]) == "X" && returnValue(array[6]) == "X") {
		return true;
	}
	else if(returnValue(array[1]) == "O" && returnValue(array[4]) == "O" && returnValue(array[7]) == "O") {
		return true;
	}
	else if(returnValue(array[1]) == "X" && returnValue(array[4]) == "X" && returnValue(array[7]) == "X") {
		return true;
	}
	else if(returnValue(array[2]) == "O" && returnValue(array[5]) == "O" && returnValue(array[8]) == "O") {
		return true;
	}
	else if(returnValue(array[2]) == "X" && returnValue(array[5]) == "X" && returnValue(array[8]) == "X") {
		return true;
	}
	else if(returnValue(array[0]) == "O" && returnValue(array[4]) == "O" && returnValue(array[8]) == "O") {
		return true;
	}
	else if(returnValue(array[0]) == "X" && returnValue(array[4]) == "X" && returnValue(array[8]) == "X") {
		return true;
	}
	else if(returnValue(array[6]) == "O" && returnValue(array[4]) == "O" && returnValue(array[2]) == "O") {
		return true;
	}
	else if(returnValue(array[6]) == "X" && returnValue(array[4]) == "X" && returnValue(array[2]) == "X") {
		return true;
	}
	else {return false;}
}

function returnValue(str) {
	return document.getElementById(str).innerHTML;
}

function res() {
	for(var i=0;i<array.length;i++) {
		document.getElementById(array[i]).innerHTML = "";
	}
	document.getElementById("end-game").innerHTML = "";
}
