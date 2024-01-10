import User from "@/components/User/User";
import { fetchUser } from "@/lib/fetch";

const page = async ({ params }) => {
  const user = await fetchUser(params.slug);
  console.log(user);
  return (
    <div>
      <User user={user} />
    </div>
  );
};

export default page;
