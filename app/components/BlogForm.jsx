"use client";
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const BlogForm = () => {
  const router = useRouter();
  const [newBlog, setNewBlog] = useState({
    title: "",
    date: "",
    author: "",
    description: "",
  });

  //Add item to Database
  const addItem = async (e) => {
    e.preventDefault();
    if (
      newBlog.title !== "" &&
      newBlog.date !== "" &&
      newBlog.author !== "" &&
      newBlog.description !== ""
    ) {
      await addDoc(collection(db, "blogs"), {
        title: newBlog.title,
        date: newBlog.date,
        author: newBlog.author,
        description: newBlog.description,
      });
      setNewBlog({ title: "", date: "", author: "", description: "" });
      router.push("/");
    }
  };

  return (
    <form className="bg-slate-800 p-10 border border-slate-500 flex-col items-center w-3/6 rounded-xl shadow-slate-100">
      <div className="mb-3">
        <label className="block mb-1" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="title"
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className=" p-3 border mx-3 text-black rounded w-full bg-slate-300"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          onChange={(e) => setNewBlog({ ...newBlog, date: e.target.value })}
          className=" p-3 border mx-3 text-black rounded w-full bg-slate-300"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1" htmlFor="author">
          Author
        </label>
        <input
          type="text"
          id="author"
          placeholder="Author"
          onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
          className=" p-3 border mx-3 text-black rounded w-full bg-slate-300"
        />
      </div>
      <div className="mb-3">
        <label className="block mb-1" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          placeholder="description"
          onChange={(e) =>
            setNewBlog({ ...newBlog, description: e.target.value })
          }
          className=" p-3 border mx-3 text-black rounded w-full bg-slate-300"
        />
      </div>

      <button
        onClick={addItem}
        type="submit "
        className="bg-orange-800 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded mt-8 ms-28 w-3/6 "
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
