// переменные

const number = 23322332;
const name = "Andrey";
const age = 18;

const lastName = prompt("Whats you last name?");

alert(name + " " + lastName);

const courses = "panding";

if (courses === "redy") {
	console.log("Курс готов к покорнеию");
} else if (courses === "panding") {
	console.log("Курс ещё не готов");
}

const answers = prompt("Какое «официальное» название JavaScript?");

if (answers === "ECMAScript") {
	alert("Верно!");
} else {
	alert("Не знаете? " + "ECMAScript!");
}

const num = +prompt("Введите число");

if (num < 0) {
	alert(-1);
} else if (num == 0) {
	alert(0);
} else {
	alert(1);
}

let a = 2;
let b = 5;

let result = a + b < 4;

result
	? console.log("Мало")
	: console.log("Много")
	? console.log("")
	: (result = a + b < 4 ? "Мало" : "Много");

let message;

let message;

if (login == "Сотрудник") {
	message = "Привет";
} else if (login == "Директор") {
	message = "Здравствуйте";
} else if (login == "") {
	message = "Нет логина";
} else {
	message = "";
}

let login = +prompt("Введите логин");
login === "Сотрудник",
	"Начальник",
	" " ? alert(" ") : alert("Здраствуйте") ? alert("Логин оцутствует") : "";

let login = +prompt("Login");
message == "Сотрудник", "Начальник" ? alert("Hi") : alert("Hello");

let login = prompt("Login");
let message = login;
message =
	login == "Сотрудник"
		? alert("Привет")
		: login == "Директор"
		? alert("Здравствуйте")
		: login == " "
		? alert("Нет логина")
		: "";

let login = prompt("Login");
let message = login;
message =
	login == "Сотрудник"
		? alert("Привет")
		: login == "Директор"
		? alert("Здраствуйте")
		: login == " "
		? alert("Нет логина")
		: "";

let name = "Andrey";

alert(`Человек по имени: ${name}`);

function newMassega() {
	alert("Hello :-)");
}

function showPrimes(n) {
	for (let i = 2; i < n; i++) {
		if (!isPrime(i)) continue;

		alert(i); // простое
	}
}

function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i == 0) return false;
	}
	return true;
}

function chekcAge(age) {
	return age > 18 ? true : confirm("No");
}

function min(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}
function nummme(a, s) {
	if (a < b) {
		return a;
	} else {
		return s;
	}
}

const person = {
	firstName: "Andrey",
	age: "18",
	year: "2002",
	lenguages: ["English", "Russian", "Polish", "Ukranian"],
	hasWife: false,
	greet: function() {
		console.log("greet");
	}
};
