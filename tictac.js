var tictac = [];
class Player{

	constructor(){
		this.Name = "";
		this.points = 0;
	}
	set PName(name){
		this.Name = name;
	}
	set PPoints(points){
		this.points = points;
	}
	get PPoints(){
		return this.points;
	}
	get PName(){
		return this.Name;
	}


}
Player1 = new Player();
Player2 = new Player();
var gameOver = false;


function submitButton(){
  var inputWindow = document.getElementById("inputWindow");
  inputWindow.style.display = "none";
  var gameWindow =  document.getElementById("gameWindow");
  gameWindow.style.display = "block";
  Player1.PName= document.getElementById("Player1Name").value;
  Player2.PName= document.getElementById("Player2Name").value;
  document.getElementById("Player1Text").setAttribute("style", "visibility: visible");
  document.getElementById("Player1Text").innerHTML = Player1.PName+' (X) eilė';
}
function displayImages(element){
	if(gameOver!= true){
		const elem = document.getElementById(element.id);
		if(tictac.length %2 == 0){
			document.getElementById("Player1Text").setAttribute("style", "visibility: hidden");
			document.getElementById("Player1Text").innerHTML = "";
			document.getElementById("Player2Text").setAttribute("style", "visibility: visible");
			document.getElementById("Player2Text").innerHTML = Player2.PName+' (O) eilė';
			if(elem.childNodes.length <1){	
			var img = document.createElement("img");
			img.setAttribute("style", "max-height:99%; max-width:99%");
			img.src = "cross.png";
			elem.appendChild(img);
			tictac.push("X"+element.id);
			}
		}
		else{
			document.getElementById("Player2Text").setAttribute("style", "visibility: hidden");
			document.getElementById("Player2Text").innerHTML = "";
			document.getElementById("Player1Text").setAttribute("style", "visibility: visible");
			document.getElementById("Player1Text").innerHTML = Player1.PName+' (X) eilė';
			if(elem.childNodes.length <1){	
	 		var img = document.createElement("img");
	 		img.setAttribute("style", "max-height:99%; max-width:99%");
			img.src = "O_red.png";
			elem.appendChild(img);
			tictac.push("O"+element.id);
			}
		}
		checkResult(tictac);
	}
}
function checkResult(tictac){
	//ROWS
	if((tictac.includes('X1') == true && tictac.includes('X2') == true && tictac.includes('X3') == true)) checkSymbol(tictac, 'X');
	if((tictac.includes('X4') == true && tictac.includes('X5') == true && tictac.includes('X7') == true)) checkSymbol(tictac, 'X');
	if((tictac.includes('X7') == true && tictac.includes('X8') == true && tictac.includes('X9') == true)) checkSymbol(tictac, 'X');

	if((tictac.includes('O1') == true && tictac.includes('O2') == true && tictac.includes('O3') == true)) checkSymbol(tictac, 'O');
	if((tictac.includes('O4') == true && tictac.includes('O5') == true && tictac.includes('O7') == true)) checkSymbol(tictac, 'O');
	if((tictac.includes('O7') == true && tictac.includes('O8') == true && tictac.includes('O9') == true)) checkSymbol(tictac, 'O');

	//COLUMNS
	if((tictac.includes('X1') == true && tictac.includes('X4') == true && tictac.includes('X7') == true)) checkSymbol(tictac, 'X');
	if((tictac.includes('X2') == true && tictac.includes('X5') == true && tictac.includes('X8') == true)) checkSymbol(tictac, 'X');
	if((tictac.includes('X3') == true && tictac.includes('X6') == true && tictac.includes('X9') == true)) checkSymbol(tictac, 'X');

	if((tictac.includes('O1') == true && tictac.includes('O4') == true && tictac.includes('O7') == true)) checkSymbol(tictac, 'O');
	if((tictac.includes('O2') == true && tictac.includes('O5') == true && tictac.includes('O8') == true)) checkSymbol(tictac, 'O');
	if((tictac.includes('O3') == true && tictac.includes('O6') == true && tictac.includes('O9') == true)) checkSymbol(tictac, 'O');


	if((tictac.includes('X1') == true && tictac.includes('X5') == true && tictac.includes('X9') == true)) checkSymbol(tictac, 'X');
	if((tictac.includes('X3') == true && tictac.includes('X5') == true && tictac.includes('X7') == true)) checkSymbol(tictac, 'X');

	if((tictac.includes('O1') == true && tictac.includes('O5') == true && tictac.includes('O9') == true)) checkSymbol(tictac, 'O');
	if((tictac.includes('O3') == true && tictac.includes('O5') == true && tictac.includes('O7') == true)) checkSymbol(tictac, 'O');

		for(var i in tictac){
		console.log(tictac[i]);
	}
}
function checkSymbol(symbolArray, winner){
	if(winner == 'X') {
		document.getElementById("Player2Text").setAttribute("style", "visibility: hidden");
		document.getElementById("Player1Text").setAttribute("style", "visibility: hidden");
		Player1.PPoints=Player1.PPoints+1;
		var popup = document.getElementById("myPopup");
		popup.setAttribute("style", "visibility: visible");
		popup.innerHTML = 'Laimėjo '+Player1.PName+'! <br> Taškai: <br> '+Player1.PName+': '+Player1.PPoints+'<br>'+Player2.PName+': '+Player2.PPoints;
		
		var replaybtn = document.getElementById("replaybtn");
		replaybtn.setAttribute("style", "visibility: visible");
		gameOver = true;
	}
	else{
		document.getElementById("Player2Text").setAttribute("style", "visibility: hidden");
		document.getElementById("Player1Text").setAttribute("style", "visibility: hidden");
		Player2.PPoints= Player2.PPoints+1;
		var popup = document.getElementById("myPopup");
		popup.setAttribute("style", "visibility: visible");
		popup.innerHTML = 'Laimėjo '+Player2.PName+'! <br> Taškai: <br> '+Player2.PName+': '+Player2.PPoints+'<br>'+Player1.PName+': '+Player1.PPoints;
		
		var replaybtn = document.getElementById("replaybtn");
		replaybtn.setAttribute("style", "visibility: visible");
		gameOver = true;
	}
}
function restartGame(){
	gameOver = false;
	tictac = [];
	for(var i =1; i <10; i++){
		document.getElementById(i).innerHTML = "";
	}

	var replaybtn = document.getElementById("replaybtn");
	replaybtn.setAttribute("style", "visibility: hidden");

	var popup = document.getElementById("myPopup");
	popup.setAttribute("style", "visibility: hidden");
	document.getElementById("Player2Text").setAttribute("style", "visibility: hidden");
	document.getElementById("Player2Text").innerHTML = "";
	document.getElementById("Player1Text").setAttribute("style", "visibility: visible");
	document.getElementById("Player1Text").innerHTML = Player1.PName+' (X) eilė';
}