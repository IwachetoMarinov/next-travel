import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { tr } from "date-fns/locale";
// import { users } from "@/constants/data";

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];
export default async function page() {
  const getCustomers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const users = data?.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        company: user.email,
        role: "Frontend Developer",
        verified: true,
        status: user.address?.street,
      };
    });
    return users;
  };

  const users = await getCustomers();
  console.log(users);

  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </>
  );
}
