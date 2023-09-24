"use client";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [newItem, setNewItem] = useState({
    title: "",
    date: "",
    author: "",
    description: "",
  });

  //Add item to Database
  const addItem = async (e) => {
    e.preventDefault();
    if (
      newItem.title !== "" &&
      newItem.date !== "" &&
      newItem.author !== "" &&
      newItem.description !== ""
    ) {
      // setItems([items, newItem]);
      await addDoc(collection(db, "blogs"), {
        title: newItem.title,
        date: newItem.date,
        author: newItem.author,
        description: newItem.description,
      });
      setNewItem({ title: "", date: "", author: "", description: "" });
    }
  };

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 p-4">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="my-4 bg-slate-700 grid-cols-2">
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
            <p>{blog.author}</p>
          </div>
        ))}
      </div>
      <form>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
          className=" p-3 border mx-3 text-black"
        />
        <input
          type="date"
          onChange={(e) => setNewItem({ ...newItem, date: e.target.value })}
          className=" p-3 border mx-3 text-black"
        />
        <input
          type="text"
          placeholder="Author"
          onChange={(e) => setNewItem({ ...newItem, author: e.target.value })}
          className=" p-3 border mx-3 text-black"
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) =>
            setNewItem({ ...newItem, description: e.target.value })
          }
          className=" p-3 border mx-3 text-black"
        />

        <button onClick={addItem} type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
