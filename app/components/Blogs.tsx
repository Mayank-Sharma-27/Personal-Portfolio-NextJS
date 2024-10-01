"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import blogs from "../blogs/data/blogs.json";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  // Calculate the indexes for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Calculate total number of pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section id="blogs" className="mt-20 text-white mx-[10%]">
      <h2 className="text-4xl text-black font-bold tracking-widest text-center">
        My Blogs
      </h2>{" "}
      {/* Added heading */}
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        {currentBlogs.map((blog, id) => (
          <BlogCard key={id} blog={blog} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                currentPage === index + 1
                  ? "z-10 bg-indigo-600 border-indigo-500 text-white"
                  : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Blogs;
