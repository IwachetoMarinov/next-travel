import React from "react";
import Banner from "@/components/banner";
import { client } from "@/lib/sanity/sanity";
import CheckmateGrid from "@/components/checkmate-grid";
import PageHeader from "@/components/layout/page-header";
import { banerData } from "@/constants/mockup";
import Heading from "@/components/layout/heading";
import {
  mapEvents,
  mapEventsToCheckmate,
  mapNews,
} from "@/services/transformDataService";
import ThreeColumnGrid from "@/components/layout/three-column-grid";

export default async function Home() {
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

  const data = mapEvents(blogs, "blog");
  const newsData = mapNews(news);
  const checkmateData = mapEventsToCheckmate(blogs, "blog");
  console.log("checkmateData", checkmateData);

  return (
    <main className="">
      <Banner data={banerData} />
      {/* Last events */}
      <PageHeader title={"Последни събития"} />
      <CheckmateGrid data={checkmateData} />

      {/* Last Blogs */}
      <Heading title={"Последни статии"} styleCLass="uppercase" />
      <ThreeColumnGrid data={data} />

      {/* News */}
      <Heading title={"Последни новини"} styleCLass="uppercase" />
      <ThreeColumnGrid data={newsData} />
    </main>
  );
}
