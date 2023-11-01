import React from "react";
import CardEl from "../shared/CardEl";
import { useQuery } from "@apollo/client";
import { GET_POSTS_INFO } from "../../graphql/query";
import Loader from "../shared/Loader";
const Blogs = () => {
  const { loading, data, error } = useQuery(GET_POSTS_INFO);
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 ">
      {data.posts.map((post) => {
        return (
          <div key={post.id}>
            <CardEl postData={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
