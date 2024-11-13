import React from "react";
import { client } from "@/lib/sanity/sanity";
import BlogPage from "@/components/pages/blog/BlogPage";
import PageHeader from "@/components/layout/page-header";
import { PortableText } from "@portabletext/react";
import Difficulty from "@/components/difficulty/iindex";

export default async function BlogDetails({
  params,
}: Readonly<{ params: any }>) {
  const eventId = params?.slug ? params.slug : null;

  const blog = await client.fetch(`*[_type == "events" && _id == '${eventId}']{
    ...,
    image{
       asset->{
        _id,
        url
      },
      alt
    },
    gallery[]{
      asset->{
        _id,
        url
      },
      alt,
      caption 
    }
  }`);

  //   console.log("blog", blog[0]);

  //   console.dir(blog, { depth: null });

  return (
    <>
      <BlogPage data={blog?.[0]} />;
      <main className="page-container">
        <PageHeader title={blog?.[0]?.title} />
        <PortableText value={blog?.[0]?.blog_content || null} />
        <Difficulty difficulty={blog?.[0]?.difficulty} />
      </main>
    </>
  );
}
