import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Catlist from "./components/Catlist.js";
import Joke from "./components/Joke.js";

function App() {
  const [categories, setCategories] = useState([]);
  const [joke, setJoke] = useState("");

  useEffect(() => {
    //fetch categories
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, []);

  function getJoke(category) {
    fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((res) => res.json())
      .then((res) => {
        setJoke(res.value);
      });
  }

  if (categories.length === 0) return null;
  return (
    <div className="App">
      <h1>useEffect app</h1>
      <section>
        <Catlist categories={categories} getJoke={getJoke} />
        <Joke joke={joke} />
      </section>
    </div>
  );
}

export default App;
