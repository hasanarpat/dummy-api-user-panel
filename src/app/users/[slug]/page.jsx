import { fetchUser } from "@/lib/fetch";
import styles from "./page.module.css";
import Image from "next/image";
import UpdateForm from "@/components/UpdateForm/UpdateForm";

const page = async ({ params }) => {
  const user = await fetchUser(params.slug);
  console.log(user);

  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <div className={styles.nameContainer}>
          <Image
            src={user.picture}
            alt={user.firstName}
            width={150}
            height={150}
            style={{ borderRadius: 20 }}
          />
          <span>{user.title.toUpperCase()}.</span>
          <span>{user.firstName.toUpperCase()}</span>
          <span>{user.lastName.toUpperCase()}</span>
        </div>
        <h2>Gender: {user.gender.toUpperCase()}</h2>
        <div className={styles.contact}>
          <div className={styles.communication}>
            <h2>Email: {user.email}</h2>
            <h2>Phone Number: {user.phone}</h2>
          </div>
          <h2>Address: {user.location.street + " " + user.location.city}</h2>
          <h2>
            {user.location.state +
              "/" +
              user.location.country +
              "  " +
              user.location.timezone}
          </h2>
        </div>
        <h2>{`Birthdate: ${user.dateOfBirth}`}</h2>
        <h2>Register Date: {user.registerDate}</h2>
        <h2>Updated Date: {user.updatedDate}</h2>
      </div>
      <div className={styles.updateForm}>
        <UpdateForm id={user.id} />
      </div>
    </div>
  );
};

export default page;
