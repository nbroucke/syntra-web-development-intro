const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const input = document.querySelector(".search")
const ul = document.querySelector(".suggestions");
input.addEventListener('input', filterList);

function filterList(e) {
    let searched = input.value.trim();
    if (searched == '') {
        ul.innerHTML = `<li>Filter for a city</li>
        <li>or a state</li>`
    }
    else {
        const array = cities.filter(el => el.city.toUpperCase().includes(input.value.toUpperCase()) || el.state.toUpperCase().includes(input.value.toUpperCase()))
        const newtext = array.reduce((ac, el) => {
            let re = new RegExp(searched, "gi");

            let citie = el.city.replace(re, `<span class="hl">${searched}</span>`)
            let state = el.state.replace(re, `<span class="hl">${searched}</span>`)
            let text = `<li><span>${citie}</<span> <span>${state}</span> <span>${el.population}</span></li>`;

            ac += text
            return ac

        }, ' ');

        ul.innerHTML = newtext
    }
}

fetch(endpoint)
    .then(data => { return data.json(); })
    .then(data => {
        data.forEach(el => cities.push(el))
    }
    )

