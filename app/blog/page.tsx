import React from "react";
import { client } from "@/lib/sanity/sanity";
import PageHeader from "@/components/layout/page-header";
import ThreeColumnGrid from "@/components/layout/three-column-grid";
import { mapEvents } from "@/services/transformDataService";

export default async function Blogs() {
  const blogs = await client.fetch(`*[_type == 'events']{
    ...,
    image{
      asset->{
        _id,
        url
      },
      alt
    }
  }`);

  const data = mapEvents(blogs, "blog");

  return (
    <main className="page-container my-6 md:my-10">
      <PageHeader title={"Блог"} />
      <ThreeColumnGrid data={data} />
    </main>
  );
}
