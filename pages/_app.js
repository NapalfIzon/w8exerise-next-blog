import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Header from "../component/Header/Header";
import Image from "next/image";

import "../styles/global.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [isLocalStorage, setIsLocalStorage] = useState(null);
  const [value, setValue] = useState({
    userId: uuid(),
    userName: "",
    userAvatar: "",
  });

  useEffect(() => {
    setIsLocalStorage(localStorage.getItem("blog-auth"));
  }, []);

  const addLocalStorage = (event) => {
    event.preventDefault();
    setValue({ ...value, userId: uuid() });
    localStorage.setItem("blog-auth", JSON.stringify(value));
  };

  const changeData = (event) => {
    setValue({ ...value, [event.target.id]: event.target.value });
  };

  return (
    <>
      <Header isLocalStorage={isLocalStorage} />
      <Component {...pageProps} />
      <div className="body-container">
        {isLocalStorage ? (
          <p>OK</p>
        ) : (
          <div>
            <form onSubmit={addLocalStorage}>
              <input
                type="text"
                id="userName"
                onChange={changeData}
                value={value.userName}
                placeholder="Nombre..."
              />
              <input
                type="text"
                id="userAvatar"
                onChange={changeData}
                value={value.userAvatar}
                placeholder="Avatar..."
              />
              <button>Envía</button>
            </form>
            {value.userAvatar.length > 0 && (
              <Image
                src={value.userAvatar}
                width={200}
                height={200}
                alt={value.userName}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
}
