import React from "react";
import { client } from "@/lib/sanity/sanity";
import PageHeader from "@/components/layout/page-header";
import ThreeColumnDrid from "@/components/layout/three-column-grid";
import { mapNews } from "@/services/transformDataService";

export default async function PageNews() {
  const news = await client.fetch(`*[_type == 'news']{
  ...,
  image{
     asset->{
      _id,
      url
    },
    alt
  }
}`);

  const data = mapNews(news);

  return (
    <main className="page-container">
      <PageHeader title={"Новини"} />
      <ThreeColumnDrid data={data} />
    </main>
  );
}
