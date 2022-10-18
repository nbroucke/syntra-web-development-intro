console.log('😁');
const items=["id1","id2"];
items.push("id3");


let  reassign;
/*
reassign = items;

reassign.push("id4");

console.log(items);
*/

reassign = [...items];

reassign.push("id4");

console.log(items);



const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
