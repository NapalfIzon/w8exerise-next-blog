import { useEffect } from "react";

const ShowNotesPage = ({ notes }) => {
  return (
    <>
      {
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
              <p>{note.userId}</p>
              <p>{note.userName}</p>
              <p>{note.userAvatar}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default ShowNotesPage;
