import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_INFO } from "../../graphql/query";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../shared/Loader";
const BlogPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h3>{error.message}</h3>;
  const { post } = data;
  const d = new Date(post.datePublished);
  const faDate = Intl.DateTimeFormat("fa", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
  return (
    <div>
      <Navbar />
      <div className="C-container mx-auto my-32">
        <div className="w-full h-[450px] rounded-lg overflow-hidden">
          <img src={post.photoCover[0].url} alt="" className="w-full h-full" />
        </div>
        <div className="flex items-center gap-3  my-10">
          <div className="w-28 h-28 rounded-full overflow-hidden">
            <img
              src={post.author.avatar.url}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.3rem] font-[600]">{post.author.name}</h3>
            <span className="text-lg font-[300]">{post.author.field}</span>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-[1.7rem] font-[600]">{post.title}</h2>
          <span className="text-lg font-[300] ">{faDate}</span>
        </div>
        <div
          className="my-5 text-lg"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.html) }}
        ></div>
        <div className="my-20">
          <CommentForm slug={slug} />
        </div>
        <div className="my-10">
          <Comments commentsData={post.comments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
