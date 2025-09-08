import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col bg-[#0a0a23] hover:scale-[1.03] transition-transform duration-200"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-48 sm:h-56 md:h-64 object-contain bg-[#181836]"
      />

      <div className="relative p-3 sm:p-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm sm:text-base">{description}</p>
      </div>
    </Link>
  );
};
