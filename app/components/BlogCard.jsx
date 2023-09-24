"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);

  // Read item from Database
  useEffect(() => {
    const q = query(collection(db, "blogs"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let blogsArr = [];

      querySnapshot.forEach((doc) => {
        blogsArr.push({ ...doc.data(), id: doc.id });
      });
      setBlogs(blogsArr);
    });
  }, []);

  // Delete item from Database
  const deleteBlog = async (id) => {
    await deleteDoc(doc(db, "blogs", id));
  };

  const source = (index) => {
    if (index % 3 === 0) return "/image3.jpg";
    if (index % 2 === 0) return "/image2.jpg";
    else return "/image1.jpg";
  };

  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className="my-4 bg-slate-800 grid-cols-2 rounded p-2"
        >
          <h2 className="text-lg">{blog.title}</h2>
          <Image
            src={source(index)}
            alt="Healthy Eating"
            width={240}
            height={80}
            priority
          />
          <p className="text-sm text-gray-200">{blog.date}</p>
          <p className="text-sm text-gray-200">{blog.author}</p>
          <div className="flex justify-between">
            <button className="bg-orange-800 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">
              See More
            </button>
            <button
              onClick={() => deleteBlog(blog.id)}
              className=" hover:bg-slate-700 text-red-500 text-xl font-bold py-2 px-4 rounded"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
