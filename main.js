function guessNumber(myNumber) {
  function askUser() {
    let userNumber = +prompt('Загадано целое число от 1 до 100. Угадайте его!');
    if (isNaN(parseInt(userNumber)) || !isFinite(userNumber) || userNumber <= 0 || userNumber > 100) {
      if (userNumber < myNumber) {
        alert('Загаданное число больше');
        askUser();
      } else if (userNumber > myNumber) {
        alert('Загаданное число меньше');
        askUser();
      } else {
        alert('Поздравляю, Вы угадали!!!');
      }
    }
  }
  askUser();
}

guessNumber(44);


