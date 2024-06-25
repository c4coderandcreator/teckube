import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | TecKube Insights</title>
        <meta
          name="description"
          content="Read the latest insights, articles, and updates from TecKube on our blog."
        />
        <meta
          name="keywords"
          content="TecKube Blog, TecKube Insights, Tech Articles"
        />
        <link rel="canonical" href="https://teckube.io/blog" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="sm:mt-[1.5rem] border-b-2 border-gray-300 my-4 mx-10 pb-6">
        <p className="font-extrabold text-center text-[2.2rem] md:text-[3.8rem] leading-[2.7rem] md:leading-[4.7rem] gradient-text">
          Blogs Will Be Live Soon...
        </p>
      </div>
    </>
  );
};

export default Blog;
