import React, { useState } from "react";

const Catlist = ({ categories, getJoke }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat} onClick={() => getJoke(cat)}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catlist;
