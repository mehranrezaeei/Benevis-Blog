import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../graphql/query";
import { Link } from "react-router-dom";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return;
  if (error) return <h1>{error.message}</h1>;
  return (
    <div className="flex flex-col shadow-lg rounded-md p-4">
      <h3 className="text-[1.5rem] text-center font-bold ">نویسنده ها</h3>
      <div className="mt-5">
        {data.authors.map((author) => {
          return (
            <Link
              to={`/authors/${author.slug}`}
              className="flex items-center border-b border-b-gray-500 pb-4 pt-2"
              key={author.id}
            >
              <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden">
                <img src={author.avatar.url} alt="" />
              </div>
              <div className="mx-2">
                <p className="text-lg font-[600]">{author.name}</p>
                <span className="font-[300]">{author.field}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Authors;
