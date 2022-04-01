// число загадано один раз, а пользователь пытается угадать его до тех пор, пока не угадает, или не нажмёт Отмена
let checkNum;

function guessNumber() {
  const myNumber = Math.floor(Math.random() * 100) + 1;
  console.log(myNumber);
  return function askUser() {
    let userNumber = prompt("Загадано целое число от 1 до 100. Угадайте его!");
    if (userNumber === null) {
      alert("Игра окончена");
    } else if (isNaN(userNumber) || userNumber.trim() === "") {
      alert("Введите число!");
      askUser();
    } else {
      userNumber = Number(userNumber);
      // console.log(userNumber + " type now " + typeof userNumber);
      if (userNumber >= 1 && userNumber <= 100) {
        if (userNumber < myNumber) {
          alert("Загаданное число больше");
          askUser();
        } else if (userNumber > myNumber) {
          alert("Загаданное число меньше");
          askUser();
        } else {
          alert("Поздравляю, Вы угадали!!!  Это число " + myNumber);
        }
      } else {
        alert("Число должно быть от 1 до 100");
        askUser();
      }
    }
  };
}

checkNum = guessNumber();
checkNum();
