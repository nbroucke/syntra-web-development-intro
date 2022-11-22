const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");

async function init() {
  let guess = "";
  let row = 0;
  let loading = true;
  let finished = false;
  console.log("lets get started");
  // the state for the app

  // nab the word of the day
  const res = await fetch("https://words.dev-apis.com/word-of-the-day");
  const { word: wordRes } = await res.json();
  const word = wordRes.toUpperCase();
  const wordParts = word.split("");
  console.log(wordParts);
  setLoading(loading);

  // user adds a letter to the current guess
  function addLetter(letter) {
    console.log("adding letter " + letter);
    if (guess.length < ANSWER_LENGTH) {
      guess += letter;
    }
    letters[row * ANSWER_LENGTH + guess.length - 1].innerText = letter;
  }

  // user tries to enter a guess
  async function commit() {
    let ok = 0;

    if (guess.length !== ANSWER_LENGTH) {
      return;
    }

    loading = true;
    setLoading(loading);
    const valid = await fetch("https://words.dev-apis.com/validate-word", {
      method: "POST",
      body: JSON.stringify({ word: guess }),
    });
    const { validWord } = await valid.json();
    loading = false;
    setLoading(loading);

    // not valid, mark the word as invalid and return
    if (!validWord) {
      markInvalidWord();
      return;
    }

    const wordMap = makeMap(wordParts);
    const guessParts = guess.split("");

    //exacte matches
    for (i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] == wordParts[i]) {
        letters[row * ANSWER_LENGTH + i].classList.add("correct");
        wordMap[guessParts[i]]--;
        ok++;
      }
    }

    //near and wrong
    for (i = 0; i < ANSWER_LENGTH; i++) {
      if (guessParts[i] != wordParts[i]) {
        if (wordMap[guessParts[i]] && wordMap[guessParts[i]] > 0) {
          letters[row * ANSWER_LENGTH + i].classList.add("close");
          wordMap[guessParts[i]]--;
        } else {
          letters[row * ANSWER_LENGTH + i].classList.add("wrong");
        }
      }
    }

    if (ok == ANSWER_LENGTH) {
      finished = true;

      document.querySelector(".brand").classList.add("winner");
      document.getElementById("result").innerText = "Congratulations, you win";
    } else {
      row++;
      guess = "";
      if (row == ROUNDS) {
        document.getElementById(
          "result"
        ).innerText = `Sorry, you lost, the word was : ${word}`;
      }
    }
  }

  // user hits backspace, if the the length of the string is 0 then do
  // nothing
  function backspace() {
    guess = guess.substring(0, guess.length - 1);
    letters[row * ANSWER_LENGTH + guess.length].innerText = "";
  }

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation
  function markInvalidWord() {
    for (let i = 0; i < ANSWER_LENGTH; i++) {
      letters[row * ANSWER_LENGTH + i].classList.remove("invalid");

      // long enough for the browser to repaint without the "invalid class" so we can then add it again
      setTimeout(
        () => letters[row * ANSWER_LENGTH + i].classList.add("invalid"),
        10
      );
    }
  }

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace
  document.addEventListener("keydown", function handleKeyPress(event) {
    if (!finished && !loading) {
      const key = event.key;

      if (key === "Enter") {
        commit();
      } else if (key === "Backspace") {
        backspace();
      } else if (isLetter(key)) {
        addLetter(key.toUpperCase());
      } else {
        // do nothing
      }
    }
  });

  console.log("it's done");

  // a little function to check to see if a character is alphabet letter
  // this uses regex (the /[a-zA-Z]/ part) but don't worry about it
  // you can learn that later and don't need it too frequently
  function isLetter(letter) {
    const regex = new RegExp(/^[a-zA-Z]$/);
    return regex.test(letter);
  }

  // show the loading spinner when needed
  function setLoading(isLoading) {
    loadingDiv.classList.toggle("hidden", !isLoading);
  }

  // takes an array of letters (like ['E', 'L', 'I', 'T', 'E']) and creates
  // an object out of it (like {E: 2, L: 1, T: 1}) so we can use that to
  // make sure we get the correct amount of letters marked close instead
  // of just wrong or correct
  function makeMap(array) {
    const obj = {};
    array.forEach((element) => {
      if (obj[element]) {
        obj[element]++;
      } else {
        obj[element] = 1;
      }
    });
    return obj;
  }
}

console.log("before init");

init();
