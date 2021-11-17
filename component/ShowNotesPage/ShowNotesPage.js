const ShowNotesPage = ({ notes }) => {
  return (
    <>
      {
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.body}</p>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

export default ShowNotesPage;
