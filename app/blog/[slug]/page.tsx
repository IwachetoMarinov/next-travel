import React from "react";
import Banner from "@/components/banner";
import { client } from "@/lib/sanity/sanity";
import BlogGallery from "@/components/pages/blog/BlogGallery";
import PageHeader from "@/components/layout/page-header";
import { PortableText } from "@portabletext/react";
import { banerData } from "@/constants/mockup";
import IconText from "@/components/IconText";
import { CalendarIcon } from "@/components/icons";
import dayjs from "dayjs";

export default async function BlogDetails(
  props: Readonly<{ params: Promise<{ slug: string }> }>
) {
  const params = await props.params;
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

  const date = blog?.[0]?.date
    ? dayjs(blog?.[0]?.date).format("MMMM D, YYYY")
    : "";

  const dynamicBannerData = {
    image: {
      src: blog?.[0]?.image?.asset?.url,
      alt: blog?.[0]?.image?.alt || "Blog main image",
    },
    imageOverlay: banerData.imageOverlay,
    heading: blog?.[0]?.title,
    description: blog?.[0]?.short_description,
  };

  console.log("Dynamic data", dynamicBannerData);

  //   image: {
  //     src: string;
  //     alt: string;
  // };
  // imageOverlay: {
  //     src: string;
  //     alt: string;
  // };
  // heading: string;
  // description: string;

  return (
    <main className="">
      <Banner data={dynamicBannerData} />
      <section className="page-container my-6 lg:my-14">
        <BlogGallery data={blog?.[0]} />
        <div className="mt-4 лg:mt-6">
          <IconText
            text={date}
            icon={<CalendarIcon width={16} height={16} fill="#878787" />}
          />
        </div>

        <PageHeader title={blog?.[0]?.title} />
        <div className="text-[#878787] text-lg: lg:text-xl">
          <PortableText value={blog?.[0]?.blog_content || null} />
        </div>
      </section>
    </main>
  );
}
