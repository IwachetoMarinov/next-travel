import React from "react";

export default function PageHeader({ title }: Readonly<{ title: string }>) {
  return (
    <div>
      <h1 className="text-3xl text-gray-700 text-center my-5">{title}</h1>
    </div>
  );
}
