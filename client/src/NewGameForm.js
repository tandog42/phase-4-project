import React, { useState } from "react";


function NewGameForm({ addNewGame }) {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    platform: "",
    image_url: "",
  });
  const [errors, setErrors] = useState([]);


  function onSubmitNewGame(e) {
    e.preventDefault();
    fetch("/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(r => {
      if (r.ok) {
        r.json().then(game => addNewGame(game));
        
      } else {
        r.json().then(data => {
          setErrors(Object.entries(data.errors));
        });
      }
    });
    setFormData("");
  }
// how to handle bad image urls
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData)
  return (
    <div>
      <form id="newGameForm" onSubmit={onSubmitNewGame}>
        <h3>Add a Game</h3>
        <input
          type="text"
          value={formData.title}
          name="title"
          required="required"
          onChange={handleChange}
          placeholder=" Enter a Title"
        />
        <input
          type="text"
          value={formData.genre}
          name="genre"
          required="required"
          onChange={handleChange}
          placeholder=" Enter a Genre"
        />

        <input
          type="text"
          value={formData.platform}
          name="platform"
          required="required"
          onChange={handleChange}
          placeholder=" Enter a Platform"
        />

        <input
          type="text"
          value={formData.image_url}
          name="image_url"
          required="required"
          onChange={handleChange}
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
