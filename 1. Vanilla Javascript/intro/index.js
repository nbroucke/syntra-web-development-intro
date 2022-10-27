// function job()
// {
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>resolve("hello world"),2000);
//   })
// }

//function job(data) {
//  console.log ('de data : ',data);
//  console.log(typeof data );
// console.log(data%2);
//  if (typeof data !== 'number')
//  {

//   return new Promise((resolve,reject) =>{
//     reject("error");
//   })
//  }
//  else if (data%2 ==0){
//     return new Promise((resolve,reject) =>{
//       setTimeout(()=>resolve("even"),2000);
//     })
//  }
//  else 
//  {
//   return new Promise((resolve,reject) =>{
//     setTimeout(()=>resolve("odd"),1000);
//   })
//  }
// }

// console.log('start');

// job(10).then((v)=> console.log('10 : ',v));
// job(11).then((v)=> console.log('11 : ',v));
// job('test').then((v)=> console.log(v)).catch ((err) => console.log('test : ',err));


const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const value = window.prompt("nummer (1-6)");
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    let points = 0;
    if (value == randomNumber)
      {points = 2}
    if (value == (randomNumber - 1) || value == (randomNumber + 1))
     { points = 1;}
  
    //  console.log('value : ' + value)
    // console.log('randomnr : ' + randomNumber)
    // console.log('punten : ' + points)
    resolve(points);
})
}

const continueGame = () => {
 // console.log('in continuegame')
  return new Promise((resolve, reject) => {
    if (confirm(' Do you want to continue?')) { //console.log('resolving'); 
      resolve('ok') }
    else { //console.log('rejecting'); 
      reject('stop') }
  })
}

const handelGuess = () => {

  enterNumber()
    .then((v) => {
      alert(`je hebt ${v} points`);
      return continueGame()
    })
    .then((v) => handelGuess())
    .catch((err) => console.log('we stoppen'))
}


handelGuess();

// console.log('😁');
// const items=["id1","id2"];
// items.push("id3");


// let  reassign;
// /*
// reassign = items;

// reassign.push("id4");

// console.log(items);
// */

// reassign = [...items];

// reassign.push("id4");

// console.log(items);



// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
