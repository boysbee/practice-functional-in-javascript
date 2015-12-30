var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]

var total = 0

total = orders.reduce((sum,order) => sum + order.amount , 0);

// total = orders.reduce(function(sum, order){
//   return sum + order.amount
// }, 0);

/*
for(var i= 0; i< orders.length; i++){
	total += orders[i].amount;

}
*/
console.log(total)