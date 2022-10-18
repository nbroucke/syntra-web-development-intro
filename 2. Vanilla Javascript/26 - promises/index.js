fetch('https://api.chucknorris.io/jokes/categories')
    .then(data => { return data.json(); })
    .then(data => {
        console.log(data);
        const random = Math.floor(Math.random() * (data.length));
        console.log(data[random])
        return fetch(`https://api.chucknorris.io/jokes/random?category=${data[random]}`);

    })
    .then(data => { return data.json(); })
    .then(data => console.log(data.value);)


