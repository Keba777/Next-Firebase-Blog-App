"use client";
import { useState } from "react";

export default function Home() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "The first", date: "sep 20, 2020" },
    { id: 2, title: "The Second", date: "Aug 2, 2020" },
    { id: 3, title: "The Third", date: "sep 20, 2020" },
    { id: 4, title: "The Fourth", date: "Aug 2, 2020" },
    { id: 5, title: "The Fifth", date: "sep 20, 2020" },
    { id: 6, title: "The Sixth", date: "Aug 2, 2020" },
  ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="my-4 bg-slate-900 grid-cols-2">
            <h2>{blog.title}</h2>
            <p>Hey: {blog.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
