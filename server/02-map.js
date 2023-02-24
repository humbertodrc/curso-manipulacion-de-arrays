const letters = ["a", "b", "c"];

// const newArray = [];

// for (let i = 0; i < letters.length; i++) {
//   const element = letters[i];
//   newArray.push(element + '++');
// }

const newArray = letters.map((letter) => letter + "++");

const numeros = [1, 2, 3, 4];

function multiplyElements(array) {
	return array.map((element) => element * 2);
}

const resultado = multiplyElements(numeros);

const orders = [
	{
		customerName: "Nicolas",
		total: 60,
		delivered: true,
	},
	{
		customerName: "Zulema",
		total: 120,
		delivered: false,
	},
	{
		customerName: "Santiago",
		total: 180,
		delivered: true,
	},
	{
		customerName: "Valentina",
		total: 240,
		delivered: true,
	},
];

console.log(letters, "antiguo array");
console.log(newArray, "nuevo array");
console.log(resultado);
