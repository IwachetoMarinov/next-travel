import React from "react";
import Image from "next/image";
import Heading from "@/components/layout/heading";
import CustomLink from "@/components/layout/link";

interface IProps {
  data: any;
}

export default function NewItem({ data }: IProps) {
  console.log("NewItem", data);

  return (
    <article>
      <Heading title={data?.title || ""} styleCLass={""} />

      {/* Main Image */}
      {data?.image?.asset?.url && (
        <div className="flex justify-center items-center my-5">
          <Image
            src={data?.image?.asset?.url}
            width={400}
            height={300}
            alt="Picture of the author"
          />
        </div>
      )}

      <p className="text-center">{data?.short_description}</p>

      <CustomLink
        title="Прочети повече"
        type="read-more"
        href={`/news/${data?._id}`}
      />
    </article>
  );
}
