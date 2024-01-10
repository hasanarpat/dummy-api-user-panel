"use client";

import { fetchDeleteRequest } from "@/lib/fetch";

const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    const response = await fetchDeleteRequest(id);
    console.log(response);
  };
  return (
    <>
      <span onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>
        X
      </span>
    </>
  );
};

export default DeleteButton;
