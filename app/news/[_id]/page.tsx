import React from "react";
import Image from "next/image";
import { client } from "@/lib/sanity/sanity";
import PageHeader from "@/components/layout/page-header";
import { PortableText } from "@portabletext/react";

export default async function PageNew(
  props: Readonly<{ params: Promise<{ _id: string }> }>
) {
  const params = await props.params;
  const eventId = params?._id ? params._id : null;

  const newData = await client.fetch(`*[_type == 'news' && _id == '${eventId}']{
  ...,
  image{
     asset->{
      _id,
      url
    },
    alt
  }
}`);

  console.log("newData", newData?.short_description);

  return (
    <main className="page-container">
      <PageHeader title={newData?.[0]?.title || ""} />

      <p>{newData?.[0]?.short_description}</p>

      <PortableText value={newData?.[0]?.content} />

      {/* Main Image */}
      {newData?.[0]?.image?.asset?.url && (
        <div className="flex justify-center items-center my-5">
          <Image
            src={newData[0].image.asset.url}
            width={800}
            height={600}
            alt="Picture of the author"
          />
        </div>
      )}
    </main>
  );
}
