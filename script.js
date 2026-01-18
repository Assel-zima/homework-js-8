// Задание 1: Имя и возраст
let firstName = "Assel";
let lastName = "Serikova";
let age = 43;

console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

// Задание 2: Город (без интерполяции)
let city = "Астана";
console.log("Я родом из города " + city);

// Задание 3: Пароль и доступ
let password = "qwerty123";
let hasAccess = password !== "";

console.log("password:", password);
console.log("hasAccess:", hasAccess);

// Задание 4: toString() и тип
let isMember = false;
isMember = isMember.toString();

console.log("isMember:", isMember);
console.log("type:", typeof isMember);

// Задание 5: Проверка корзины
let cartItems = 0;
let hasItems = Boolean(cartItems);

console.log("cartItems:", cartItems);
console.log("hasItems:", hasItems);
console.log(
  "Почему так? Потому что 0 в JavaScript — это falsy значение, значит корзина считается пустой."
);

// Задание 6: Округление до 1 знака
let averageScore = 89.75695;
averageScore = Number(averageScore.toFixed(1));

console.log("averageScore:", averageScore);

// Задание 7: Работа со строкой
let greetingMessage = "      Приветствуем вас в мире программирования!        ";

// 1) убрать пробелы по краям
greetingMessage = greetingMessage.trim();
console.log("trim:", greetingMessage);

// 2) в верхний регистр
let upperMessage = greetingMessage.toUpperCase();
console.log("upper:", upperMessage);

// 3) содержит ли "программирования"
let containsWord = greetingMessage.toLowerCase().includes("программирования");
console.log("contains 'программирования':", containsWord);

// Задание 8: Проверка возраста (prompt)
let userAgeInput = prompt("Введите ваш возраст:");

if (userAgeInput === null || userAgeInput.trim() === "") {
  alert("Пожалуйста, введите данные (возраст).");
} else if (isNaN(Number(userAgeInput))) {
  alert("Недопустимый формат. Нужно ввести число.");
} else if (Number(userAgeInput) < 18) {
  alert("Доступ ограничен. Вам должно быть 18+.");
} else {
  alert("Добро пожаловать!");
}

// Задание 9: Угадай число
let secretNumber = 7;
let guessInput = prompt("Угадайте число от 1 до 10:");

if (guessInput === null || guessInput.trim() === "") {
  alert("Вы не ввели число.");
} else if (isNaN(Number(guessInput))) {
  alert("Нужно ввести число!");
} else {
  let guess = Number(guessInput);

  if (guess === secretNumber) {
    alert("Поздравляю! Вы угадали число!");
  } else if (guess > secretNumber) {
    alert("Слишком большое число!");
  } else {
    alert("Слишком маленькое число!");
  }
}

// Задание 10: Выбор напитка по времени суток
let timeOfDay = prompt("Введите время суток (утро, день, вечер):");

if (timeOfDay === null) {
  alert("Ввод отменён пользователем.");
} else if (typeof timeOfDay !== "string") {
  alert("Ошибка: ожидалась строка.");
} else if (timeOfDay.trim() === "") {
  alert("Ошибка: строка не должна быть пустой.");
} else {
  let t = timeOfDay.trim().toLowerCase();

  if (t === "утро") {
    alert("Рекомендуем кофе ☕");
  } else if (t === "день") {
    alert("Рекомендуем чай 🍵");
  } else if (t === "вечер") {
    alert("Рекомендуем горячий шоколад 🍫");
  } else {
    alert("Ошибка: можно вводить только 'утро', 'день' или 'вечер'.");
  }
}
