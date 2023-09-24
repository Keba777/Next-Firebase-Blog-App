import Link from "next/link";
import BlogCard from "./components/BlogCard";

export default function Home() {
  return (
    <main className=" bg-slate-600 flex min-h-screen flex-col items-center sm:p-10 p-4">
      <h1 className="text-white text-6xl">My Personal Blogs</h1>
      <BlogCard />
      <Link href="/add-blog" className="w-3/6">
        <button className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 m-4 rounded min-w-full">
          Add Blog
        </button>
      </Link>
    </main>
  );
}
