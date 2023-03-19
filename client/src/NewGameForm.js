import React, { useState } from "react";

function NewGameForm({ addNewGame }) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [genre, setGenre] = useState("");
  const [imgUrl, setImageUrl] = useState("");
  const [errors, setErrors] = useState([]);
  function onSubmitNewGame(e) {
    e.preventDefault();

    const newGame = {
      title: title,
      platform: platform,
      genre: genre,
      image_url: imgUrl,
    };
    fetch("/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGame),
    }).then(r => {
      if (r.ok) {
        r.json().then(addNewGame);
      } else {
        r.json().then(data => {
          setErrors(Object.entries(data.errors));
        });
      }
    });
  }

  return (
    <div>
      <form id="newGameForm" onSubmit={onSubmitNewGame}>
        <h3>Add a Game</h3>
        <input
          type="text"
          value={title}
          required="required"
          onChange={e => setTitle(e.target.value)}
          placeholder=" Enter a Title"
        />
        <input
          type="text"
          value={genre}
          required="required"
          onChange={e => setGenre(e.target.value)}
          placeholder=" Enter a Genre"
        />

        <input
          type="text"
          value={platform}
          required="required"
          onChange={e => setPlatform(e.target.value)}
          placeholder=" Enter a Platform"
        />

        <input
          type="text"
          value={imgUrl}
          required="required"
          onChange={e => setImageUrl(e.target.value)}
          placeholder=" Enter a Image url"
        />

        <button type="submit" variant="contained">
          Submit
        </button>
        {errors}
      </form>
    </div>
  );
}

export default NewGameForm;
