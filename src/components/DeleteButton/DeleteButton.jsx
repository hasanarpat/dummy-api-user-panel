"use client";

import { fetchDeleteRequest } from "@/lib/fetch";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    await fetchDeleteRequest(id);
    router.refresh();
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
