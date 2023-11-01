import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHOR_INFO } from "../../graphql/query";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import CardEl from "../shared/CardEl";
import Navbar from "../Navbar";
import Loader from "../shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h3>{error.message}</h3>;
  const { author } = data;
  return (
    <div>
      <Navbar />
      <div className="C-container mx-auto my-32">
        <div className="flex flex-col items-center w-full gap-2 ">
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <img
              src={data.author.avatar.url}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[2rem] font-[600]">{author.name}</h2>
            <span className="text-lg font-[300]">{author.field}</span>
          </div>
        </div>
        <div className="my-10">
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </div>
        {author.posts.length > 0 && (
          <div className="flex flex-col mt-32 ">
            <h1 className="text-[2.2rem] font-[600] my-5">
              سایر مقالات نویسنده{" "}
            </h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 ">
              {author.posts.map((post) => {
                return (
                  <div>
                    <CardEl postData={post} />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthorPage;
