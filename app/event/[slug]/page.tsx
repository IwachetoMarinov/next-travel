import React from "react";
import { client } from "@/lib/sanity/sanity";
import EventView from "@/components/pages/event/EventView";

export default async function EventDetails(props: any) {
  const params = await props.params;
  const eventId = params?.slug ? params.slug : null;

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

  return (
    <main className="page-container my-6 md:my-10">
      <EventView data={event?.[0] || {}} />
    </main>
  );
}
