import React from "react";
import { client } from "@/lib/sanity/sanity";

export default async function EventDetails({
  params,
}: Readonly<{ params: any }>) {
  const eventId = params?.slug ? params.slug : null;
  console.log("eventId", eventId);

  const event = await client.fetch(`*[_type == "events" && _id == '${eventId}']{
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

  console.log("event", event[0]);

  // console.dir(event, { depth: null });

  return <div>EventDetails</div>;
}
