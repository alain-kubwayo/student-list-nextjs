import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* <h1>Student List</h1> */}
        {/* <img src="./logo.png" /> */}
        <Image src="/logo.png" width={128} height={77} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/students">
        <a>Student Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
