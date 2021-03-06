// число загадано один раз, а пользователь пытается угадать его до тех пор, пока не угадает, или не нажмёт Отмена
let checkNum;
let playAgain = false;

function guessNumber (triesNumber) {
  const myNumber = Math.floor(Math.random() * 100) + 1;
  console.log(myNumber);
  function askUser() {
    if (triesNumber > 0) {
      let userNumber = prompt("Загадано целое число от 1 до 100. Угадайте его!");
      if (userNumber === null) {
        alert("Игра окончена");
        playAgain = false;
      } else if (isNaN(userNumber) || userNumber.trim() === "") {
        alert("Введите число!");
        askUser();
      } else {
        userNumber = Number(userNumber);
        triesNumber --;
        if (userNumber === myNumber) {
          playAgain = confirm("Поздравляю, Вы угадали!!!  Это число " + myNumber + '. Хотели бы сыграть ещё?');
        } else {
          if (userNumber >= 1 && userNumber <= 100) {
            if (userNumber < myNumber) {
              alert("Загаданное число больше, осталось " + triesNumber + " попыток");
            } else if (userNumber > myNumber) {
              alert("Загаданное число меньше, осталось " + triesNumber + " попыток");
            } 
          } else {
            alert("Число должно быть от 1 до 100, осталось " + triesNumber + " попыток");
          }
          askUser();
        }
      }
    } else {
      playAgain = confirm("Попытки закончились. Хотите сыграть еще?");
    }

  }

  askUser();
  if (playAgain) guessNumber(10);
}

checkNum = guessNumber(10);
