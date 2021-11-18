import { useState, useEffect } from "react";

const AddNotePage = () => {
  const [localStorageData, setLocalStorageData] = useState({
    userId: "",
    userName: "",
    userAvatar: "",
  });
  const [newPost, SetNewPost] = useState({
    title: "",
    body: "",
  });

  const changeData = (event) => {
    SetNewPost({
      ...newPost,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const finalPost = { ...newPost, ...localStorageData };

    const response = await fetch(
      "https://isdi-blog-posts-api.herokuapp.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalPost),
      }
    );
    await response.json();
  };

  useEffect(() => {
    setLocalStorageData(JSON.parse(localStorage.getItem("blog-auth")));
  }, []);

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="name">Título:</label>
      <input
        type="text"
        id="title"
        value={newPost.title}
        onChange={changeData}
      />
      <label htmlFor="name">Contenido:</label>
      <input type="text" id="body" value={newPost.body} onChange={changeData} />
      <button>Guardar</button>
    </form>
  );
};

export default AddNotePage;
