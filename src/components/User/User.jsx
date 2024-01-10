import Image from "next/image";
import Link from "next/link";
import styles from "./user.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";

const User = ({ user }) => {
  return (
    <div className={styles.container}>
      <div className={styles.userDetails}>
        <Image
          alt="user"
          src={user.picture}
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
          className={styles.avatar}
        />
        <div className={styles.user}>
          <Link href={`/users/${user.id}`}>
            {user.firstName + " " + user.lastName + " / " + user.title}
          </Link>
          <DeleteButton id={user.id} />
        </div>
      </div>
    </div>
  );
};

export default User;
