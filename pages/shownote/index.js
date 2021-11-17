import ShowNotesPage from "component/ShowNotesPage/ShowNotesPage";

const ShowNote = ({ notes }) => {
  return <ShowNotesPage notes={notes} />;
};

export async function getServerSideProps() {
  const marioApi = "https://isdi-blog-posts-api.herokuapp.com/posts";

  const response = await fetch(marioApi);
  const notes = await response.json();

  return { props: { notes } };
}

export default ShowNote;
