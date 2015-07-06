var arr = [[null,null,null],
			[null,null,null],
			[null,null,null]];

function getInputRow() {
    console.log("Please choose a row")
    return prompt();
}

function getInputCol() {
    console.log("Please choose a col")
    return prompt();
}

function addX(row,col) {
	if (arr[row][col] !== null) {
		addX(getInput(),getInput());
	}
	else {arr[row][col] = "X";}
}

function addO(row,col) {
	if (arr[row][col] === null) {
		arr[row][col] = "O";
	}
	else {addO(getInput(),getInput());}
	
}

function checker() {
	if(arr[0][0] == "X" && arr[0][1] == "X" && arr[0][2] == "X") {
		return true;
	}
	else if(arr[1][0] == "X" && arr[1][1] == "X" && arr[1][2] == "X") {
		return true;
	}
	else if(arr[2][0] == "X" && arr[2][1] == "X" && arr[2][2] == "X") {
		return true;
	}
	else if(arr[1][0] == "O" && arr[1][1] == "O" && arr[1][2] == "O") {
		return true;
	}
	else if(arr[2][0] == "O" && arr[2][1] == "O" && arr[2][2] == "O") {
		return true;
	}
	else if(arr[0][0] == "O" && arr[0][1] == "O" && arr[0][2] == "O") {
		return true;
	}
	else if(arr[0][0] == "X" && arr[1][0] == "X" && arr[2][0] == "X") {
		return true;
	}
	else if(arr[0][1] == "X" && arr[1][1] == "X" && arr[2][1] == "X") {
		return true;
	}
	else if(arr[0][2] == "X" && arr[1][2] == "X" && arr[2][2] == "X") {
		return true;
	}
	else if(arr[0][0] == "O" && arr[1][0] == "O" && arr[2][0] == "O") {
		return true;
	}
	else if(arr[0][1] == "O" && arr[1][1] == "O" && arr[2][1] == "O") {
		return true;
	}
	else if(arr[0][2] == "O" && arr[1][2] == "O" && arr[2][2] == "O") {
		return true;
	}
	else if(arr[0][0] == "0" && arr[1][1] == "O" && arr[2][2] == "O") {
		return true;
	}
	else if(arr[2][0] == "O" && arr[1][1] == "O" && arr[0][2] == "O") {
		return true;
	}
	else if(arr[0][0] == "X" && arr[1][1] == "X" && arr[2][2] == "X") {
		return true;
	}
	else if(arr[2][0] == "X" && arr[1][1] == "X" && arr[0][2] == "X") {
		return true;
	}
	else {return false;}
}

function play() {
	while(checker()===false) {
		console.log(arr);
		addX(getInputRow(),getInputCol());
		console.log(arr);
		addO(getInputRow(),getInputCol());
	}
}