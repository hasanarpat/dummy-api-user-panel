"use client";
import { useState } from "react";
import styles from "./updateForm.module.css";
const UpdateForm = ({ id }) => {
  const [userFields, setuserFields] = useState({});
  const updateUser = async () => {
    const promise = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      method: "PUT",
      headers: {
        "app-id": process.env.APP_ID,
      },
      body: {
        ...userFields,
      },
    });
    console.log(await promise.json());
  };
  const handleChange = (e) => {
    setuserFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form action={updateUser} className={styles.container}>
      <h2>Update user Info</h2>
      <div className={styles.inputArea}>
        <input
          value={userFields.title}
          name="title"
          placeholder="Title"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.name}
          name="name"
          placeholder="Name"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.surname}
          name="surname"
          placeholder="Surname"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.birthdate}
          name="birthdate"
          placeholder="Birthdate"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.phoneNumber}
          name="phoneNumber"
          placeholder="Phone Number"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.street}
          name="street"
          placeholder="Street"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.city}
          name="city"
          placeholder="City"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.state}
          name="state"
          placeholder="State"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.timezone}
          name="timezone"
          placeholder="Timezone"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={styles.button}>
        Update
      </button>
    </form>
  );
};

export default UpdateForm;
