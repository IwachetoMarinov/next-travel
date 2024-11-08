import React from "react";
import Image from "next/image";
import Heading from "@/components/layout/heading";
import CustomLink from "@/components/layout/link";
import { IThreeColumnGridInterface } from "@/interfaces/ThreeColumnGridInterface";

interface IProps {
  data: IThreeColumnGridInterface;
}

export default function GridItem({ data }: IProps) {
  console.log("NewItem", data);

  return (
    <article>
      <Heading title={data?.title || ""} styleCLass={""} />

      {/* Main Image */}
      {data?.image && (
        <div className="flex justify-center items-center my-5">
          <Image
            src={data?.image}
            width={400}
            height={300}
            alt="Picture of the author"
          />
        </div>
      )}

      <p className="text-center">{data?.shortDescription}</p>

      <CustomLink title="Read more" type="read-more" href={data?.href} />
    </article>
  );
}
