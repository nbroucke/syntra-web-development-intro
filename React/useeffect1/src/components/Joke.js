import React, { useState } from "react";

const Joke = ({ joke }) => {
  return (
    <div className="border">
      <p>{joke}</p>
    </div>
  );
};

export default Joke;
