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

