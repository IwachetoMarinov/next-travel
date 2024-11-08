import Link from "next/link";

interface IProps {
  title: string;
  href: string;
  type: string;
}

const CustomLink = ({ title, href, type }: IProps) => {
  const linkType = (type: string): string => {
    switch (type) {
      case "read-more":
        return "text-center block mt-5 underline text-amber-600";
      case "external":
        return "external";
      default:
        return "external";
    }
  };
  return (
    <Link className={`${linkType(type)} hover:opacity-60 transition-all`} href={href}>
      {title}
    </Link>
  );
};

export default CustomLink;
