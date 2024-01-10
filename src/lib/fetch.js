export async function fetchUsers() {
  try {
    const response = await fetch("https://dummyapi.io/data/v1/user", {
      headers: { "app-id": process.env.APP_ID },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUser(id) {
  try {
    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: { "app-id": process.env.APP_ID },
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDeleteRequest(id) {
  try {
    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: { "app-id": process.env.APP_ID },
      method: "DELETE",
    });
    const returnValue = await response.json();
    console.log(returnValue);
  } catch (error) {
    console.log(error);
  }
}
