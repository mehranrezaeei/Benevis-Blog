import React from "react";
import { Link } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
const CardEl = ({ postData }) => {
  return (
    <div className="flex flex-col rounded-md h-fit overflow-hidden gap-2 bg-white shadow-md">
      <div className="w-full h-[200px]">
        <img
          src={postData.photoCover[0].url}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="p-2 flex flex-col">
        {postData.author && (
          <div className="flex items-center gap-3">
            <div className="w-[52px] h-[52px] rounded-full overflow-hidden bg-slate-200">
              <img src={postData.author.avatar.url} alt="" />
            </div>
            <div className="">
              <p className="text-[0.95rem] font-[600]">
                {postData.author.name}
              </p>
              <span className="font-[300] text-[0.95rem]">
                {postData.author.field}
              </span>
            </div>
          </div>
        )}

        <div className="mt-2 flex flex-col h-fit">
          <div
            className="C-article-text-line"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(postData.content.html),
            }}
          ></div>
          <Link
            to={`/blogs/${postData.slug}`}
            className="w-full py-2 my-2 text-center rounded-md text-lg  cursor-pointer duration-200 bg-transparent text-medium-steel-blue-700 border-2 border-medium-steel-blue-700  shadow-md transition-colors hover:bg-medium-steel-blue-700 hover:text-white"
          >
            مشاهده مقاله
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardEl;
