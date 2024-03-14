import { getUsers, getDatabase, addNew } from "@/app/api/database/route";
import News from "@/components/homepage/news";

export default async function Home() {
  const data = await getUsers();
  const news = await getDatabase("news");
  // const newResponse = await addNew(
  //   "MAY HALF TERM",
  //   "Ideal for families",
  //   "Enjoy our family-run beach club with kids in tow and experience our much loved long table feasts whilst youngsters enjoy a host of exciting shenanigans and tailored activities depending on their age group.",
  // );

  console.log("news", news);

  const res = await fetch(`${process.env.NEXT_API_URL}/api/hello`, {
    method: "GET",
    headers: {
      cache: "no-cache",
    },
  });

  const json = await res.json();
  // console.log("GET response", json);

  const resPost = await fetch(`${process.env.NEXT_API_URL}/api/landmark`, {
    method: "POST",
    body: JSON.stringify({ name: "John" }),
    headers: {
      cache: "no-cache",
      "content-type": "application/json",
    },
  });

  const jsonPost = await resPost.json();
  console.log("POST response", jsonPost);

  return (
    <>
      <div className="">
        <h3>HOME</h3>
        <main className="w-full pt-16">
          <News news={data} />
        </main>
      </div>
    </>
  );
}
