import User from "@/components/User/User";
import styles from "./page.module.css";
import { fetchUsers } from "@/lib/fetch";
import CreateForm from "@/components/CreateForm/CreateForm";

const Users = async () => {
  const users = await fetchUsers();

  return (
    <div className={styles.container}>
      <h2>You can search, edit , create and delete users on this panel!</h2>
      <div className={styles.actions}>
        <div className={styles.userContainer}>
          <div className={styles.userList}>
            {users.data &&
              users.data.map((user) => <User user={user} key={user.id} />)}
          </div>
        </div>
        <div className={styles.userActions}>
          <CreateForm />
        </div>
      </div>
    </div>
  );
};

export default Users;
