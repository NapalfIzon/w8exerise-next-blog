import Link from "next/link";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link className="link-home" href="/addnote">
            Add a note
          </Link>
        </li>
        <li>
          <Link className="link-home" href="/shownote">
            Show notes
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
