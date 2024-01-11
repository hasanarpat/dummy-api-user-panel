const appId = process.env.NEXT_PUBLIC_APP_ID;
export async function fetchUsers() {
  try {
    const response = await fetch("https://dummyapi.io/data/v1/user", {
      headers: { "app-id": appId },
      cache: "default",
      next: {
        revalidate: 3600,
      },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUser(id) {
  try {
    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: { "app-id": appId },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDeleteRequest(id) {
  try {
    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      method: "DELETE",
      headers: {
        "app-id": appId,
      },
    });
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}
