const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const newArray = [];
// for (let i = 0; i < words.length; i++) {
//   const element = words[i];
//   if (element.length >= 6) {
//     newArray.push(element);
//   }
// }

// console.log(newArray);

// const newArray2 = words.filter((word) => word.length >= 6);
// console.log(newArray2);

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

const orderDelivered = orders.filter((order) => order.delivered && order.total >= 100);
// console.log(orderDelivered);

const search = (query) => {
  return orders.filter(item => (item.customerName.includes(query)))
}

console.log(search("Zul"));