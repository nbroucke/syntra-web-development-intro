const ts = 1;
const publicKey = "ac0f0a5f8752799f9c5010fd69da044b";
//const privatekey = "cc0122c11fb4081a55d9680072ec27969a0a6a6d";
//4. Get the md5 hash of ts-privateKey-publicKey via here: https://www.md5hashgenerator.com/
const hash = "d2ced5dd7ea45953fb52d32f1b267dba";

function display(heroe) {
  document.getElementById("Name").innerText = heroe.data.results[0].name;
  document.getElementById("thumbnail").src = heroe.data.results[0].thumbnail.path + '/standard_amazing.' + heroe.data.results[0].thumbnail.extension;
  document.getElementById("Description").innerText = heroe.data.results[0].description;
  document.getElementById("comics").innerHTML = heroe.data.results[0].comics.items.map(el => `<li>${el.name}</li>`).join(' ');
  document.getElementById("series").innerHTML = heroe.data.results[0].series.items.map(el => `<li>${el.name}</li>`).join(' ');
  document.getElementById("stories").innerHTML = heroe.data.results[0].stories.items.map(el => `<li>${el.name}</li>`).join(' ');
  document.getElementById("events").innerHTML = heroe.data.results[0].events.items.map(el => `<li>${el.name}</li>`).join(' ');
}

function getOneComic(id) {

  // eerst proberen om die uit de localstorage te halen
  const heroe = JSON.parse(localStorage.getItem(`heroe${id}`))

  if (heroe == null) {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then((res) => { return res.json() })
      .then((res) => {
        localStorage.setItem(`heroe${id}`, JSON.stringify(res));
        display(JSON.parse(localStorage.getItem(`heroe${id}`)));
      }
      )
  }
  else {
    display(heroe);
  }
}

getOneComic(window.location.search.substring(1));