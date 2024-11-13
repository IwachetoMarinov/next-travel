import Link from "next/link";

const CustomLink = ({
  title,
  type,
  href,
}: Readonly<{
  title: string;
  type: string | null;
  href: string;
}>) => {
  return (
    <Link href={href}>
      <span className="text-blue-500 hover:underline">{title}</span>
    </Link>
  );
};

export default CustomLink;
