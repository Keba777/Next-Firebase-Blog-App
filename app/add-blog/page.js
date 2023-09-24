"use client";
import React from "react";
import BlogForm from "../components/BlogForm";
import { useRouter } from "next/router";

const NewBlogPage = () => {
  const router = useRouter();

  const navigateToHomePage = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen bg-slate-600 flex items-center justify-center p-4">
      <BlogForm navigateToHomePage={navigateToHomePage} />
    </div>
  );
};

export default NewBlogPage;
