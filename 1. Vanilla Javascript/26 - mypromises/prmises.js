// fetch('https://api.chucknorris.io/jokes/categories')
//     .then(data => { return data.json(); })
//     .then(data => {
//         console.log(data);
//         const random = Math.floor(Math.random() * (data.length));
//         console.log(data[random])
//         return fetch(`https://api.chucknorris.io/jokes/random?category=${data[random]}`);

//     })
//     .then(data => { return data.json(); })
//     .then(data => console.log(data.value);)

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }

//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404

// async function loadJson(url) {

// const response = await fetch(url);
// if (response.status == 200) {
// return  responseFetch.json();

// }

Promise.reject("error (originally)")
  .finally(() => {
    throw "error (finally)";
  })
  .catch((error) => {
    console.log(error);
  });
