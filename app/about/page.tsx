import React from "react";

export default function About() {
  const aboutData = "About page";

  return (
    <header className="flex items-center justify-end">
      <div>
        <h1>{aboutData}</h1>
      </div>
    </header>
  );
}
