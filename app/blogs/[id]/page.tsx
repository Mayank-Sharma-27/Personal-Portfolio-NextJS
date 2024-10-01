import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata, ResolvingMetadata } from "next";

interface BlogPostProps {
  params: { id: string };
}

export async function generateMetadata(
  { params }: BlogPostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const blogData = await getBlogData(id);

  return {
    title: blogData.title,
    description: blogData.description,
  };
}

async function getBlogData(id: string) {
  try {
    const blogsData = await fs.readFile(
      path.join(process.cwd(), "app/blogs/data/blogs.json"),
      "utf-8"
    );
    const blogs = JSON.parse(blogsData);
    const blog = blogs.find((blog: any) => blog.id === id);
    if (!blog) {
      throw new Error(`Blog with id ${id} not found`);
    }
    return blog;
  } catch (error) {
    console.error(`Error fetching blog data: ${error}`);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const blogsData = await fs.readFile(
      path.join(process.cwd(), "app/blogs/data/blogs.json"),
      "utf-8"
    );
    const blogs = JSON.parse(blogsData);
    return blogs.map((blog: any) => ({
      id: blog.id,
    }));
  } catch (error) {
    console.error(`Error generating static params: ${error}`);
    return [];
  }
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = params;
  let content: string;

  try {
    content = await fs.readFile(
      path.join(process.cwd(), `public/blogs/${id}.md`),
      "utf-8"
    );
  } catch (error) {
    notFound();
  }

  const blogData = await getBlogData(id);

  return (
    <article className="article">
      {/* Home Link */}
      <a
        href="/"
        className="block text-center text-lg text-blue-400 underline hover:text-blue-500 mb-6"
      >
        Mayank Sharma
      </a>

      {/* Blog Title */}
      {/* <h1 className="text-4xl font-bold mb-4 text-gray-100">
        {blogData.title}
      </h1> */}

      {/* Blog Content */}
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
