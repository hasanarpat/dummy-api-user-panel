import Links from "./Links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";

const links = [
  {
    path: "/users",
    title: "User Panel",
  },
  {
    path: "/posts",
    title: "Post Panel",
  },
];

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        DersiGO
      </Link>
      <div className={styles.links}>
        <Links links={links} />
      </div>
    </nav>
  );
};

export default Navbar;
