import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="link-container">
        <Link
          className="header"
          href="/"
        >
          Home |&nbsp;
        </Link>
        <Link
          className="header"
          href="/users"
        >
           Users | &nbsp;
        </Link>
        <Link
          className="header"
          href="/posts"
        >
           Posts | &nbsp;
        </Link>
        <Link
          className="header"
          href="/posts/new"
        >
           New Post
        </Link>
      </div>
    </header>
  );
};

export default Header;