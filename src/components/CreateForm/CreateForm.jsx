"use client";
import { useState } from "react";
import styles from "./createForm.module.css";
const CreateForm = () => {
  const [userFields, setuserFields] = useState({});

  async function createUserRequest() {
    try {
      const response = await fetch(`https://dummyapi.io/data/v1/user/create`, {
        method: "POST",
        headers: {
          "app-id": process.env.NEXT_PUBLIC_APP_ID,
          "Content-Type": "application/json",
          "access"
        },
        body: userFields,
      });
      console.log(await response.json());
    } catch (error) {
      console.log(error);
    }
  }
  const handleChange = (e) => {
    setuserFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(userFields);
  };

  return (
    <form action={createUserRequest} className={styles.container}>
      <h2>Create New User</h2>
      <div className={styles.inputArea}>
        <input
          value={userFields.picture}
          name="picture"
          placeholder="Profile Picture"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.title}
          name="title"
          placeholder="Title"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.firstName}
          name="firstName"
          placeholder="Name"
          type="text"
          onChange={handleChange}
          required
        />
        <input
          value={userFields.lastName}
          name="lastName"
          placeholder="Surname"
          type="text"
          onChange={handleChange}
          required
        />
        <input
          value={userFields.gender}
          name="gender"
          placeholder="Gender"
          type="text"
          onChange={handleChange}
        />
        <input
          value={userFields.email}
          name="email"
          placeholder="email@example.com"
          type="email"
          onChange={handleChange}
          required
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

export default CreateForm;
