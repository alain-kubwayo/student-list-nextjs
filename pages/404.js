import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"; // gives us access to a method to redirec the user

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1); // like clicking back
      // router.go(1); // forward
      router.push("/");
    }, 3000);
  }, []); // fires a function when a component first mount (once because of empty dependency array)
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
