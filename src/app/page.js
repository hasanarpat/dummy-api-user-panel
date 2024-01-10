import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // fetchUser();

  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <Image alt="hero image" src="/hero.gif" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem Ipsum Doler Sit</h1>
        <p className={styles.description}>
          Culpa in minim exercitation consequat ea ut. Esse ex duis Lorem elit
          ut elit incididunt fugiat magna tempor cupidatat pariatur. Ullamco
          mollit voluptate et proident ea. Lorem ut laborum in cupidatat nostrud
          minim eiusmod ex. Cillum voluptate cillum aute sunt nulla.
        </p>
        <div className={styles.buttons}>
          <Link className={styles.button} href="/users">
            See User Actions
          </Link>
          <Link className={styles.button} href="/posts">
            See Post Actions
          </Link>
        </div>
      </div>
    </main>
  );
}
