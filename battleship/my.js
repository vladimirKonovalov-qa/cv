var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while(isSunk == false){
	guess = prompt("Ты готов выстрелить? (Введи цифры от 0 до 6):");
	if(guess < 0 || guess > 6){
		alert("Я же просил ввести от 0 до 6!");
	}else{
		guesses = guesses + 1;
		if(guess == location1 || guess == location2 || guess == location3){
			hits = hits + 1;
			if(hits == 3){
				isSunk = true;
				alert("Ты победил в игре!");
			}
		}else{
			alert("МИМО");
		}
	}
}
var status = "Вы выстрелили " + guesses + " для того, чтобы попасть по кораблю, " +
"Это показывает уровень вашей точности, как: " + (3/guesses);
alert(status);