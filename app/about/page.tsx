import PageHeader from "@/components/layout/page-header";
import React from "react";

export default function About() {
  const aboutData = "За нас";

  return (
    <section>
      <PageHeader title={aboutData} />
    </section>
  );
}
