// components/BlogDetail.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";

const BlogDetail = () => {
  const params = useParams();

  const id = params.id;

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        const blogDoc = await getDoc(doc(db, "blogs", id));
        if (blogDoc.exists()) {
          setBlog(blogDoc.data());
        } else {
          console.error("Blog not found");
        }
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const source = () => {
    const index = Math.floor(Math.random() * 10); // Generate a random index between 0 and 10
    if (index % 3 === 0) return "/image3.jpg";
    if (index % 2 === 0) return "/image2.jpg";
    else return "/image1.jpg";
  };

  return (
    <div className="bg-slate-800 p-10 border border-slate-500 flex-col items-center w-3/4 rounded-xl ">
      <h2 className="text-3xl mb-4 flex justify-center">{blog.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            src={source()}
            alt="Healthy Eating"
            width={380}
            height={80}
            priority
            className="rounded"
          />
        </div>
        <div>
          <p className=" text-sm text-gray-300 mb-6">{blog.description}</p>
          <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
          <p className=" text-gray-200">By: {blog.author}</p>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link href="/">
          <button className="bg-orange-800 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
