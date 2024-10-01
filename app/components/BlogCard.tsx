import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  id: string;
  title: string;
  imageSrc: string;
  description: string;
}

const BlogCard = ({
  blog: { id, title, imageSrc, description },
}: {
  blog: BlogProps;
}) => {
  return (
    <Link
      href={`/blogs/${id}`}
      className="flex flex-col rounded-lg bg-white shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
    >
      <div className="relative h-48">
        <Image
          src={`/images/${imageSrc}`}
          alt={`Image of ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="mt-4 text-indigo-600 text-sm font-medium">
          Read more →
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
