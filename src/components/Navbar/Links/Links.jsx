"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./links.module.css";

const Links = ({ links }) => {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          href={link.path}
          className={`${pathName == link.path && styles.active} ${styles.link}`}
        >
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;
