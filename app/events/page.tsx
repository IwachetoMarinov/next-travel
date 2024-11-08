import clsx from "clsx";
import { client } from "@/lib/sanity/sanity";
import PageHeader from "@/components/layout/page-header";
import ThreeColumnDrid from "@/components/layout/three-column-grid";
import { mapEvents } from "@/services/transformDataService";

export default async function Header() {
  const events = await client.fetch(`*[_type == 'events']{
  ...,
  image{
     asset->{
      _id,
      url
    },
    alt
  }
}`);

  const data = mapEvents(events);

  return (
    <main className="page-container">
      <PageHeader title={"Събития"} />
      <ThreeColumnDrid data={data} />
    </main>
  );
}
