import React from "react";

const Comments = ({ commentsData }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-[1.5rem] font-[600]">کامنت ها</h4>
      <div className="px-2 my-4 flex flex-col gap-3">
        {commentsData.map((comment) => {
          return (
            <div className="flex flex-col" key={comment.id}>
              <div className="flex items-center">
                <div className="w-[52px] h-[52px] bg-gray-400 rounded-full flex justify-center items-center text-[1.3rem] text-white pointer-events-none">
                  {comment.name[0]}
                </div>
                <div>
                  <h4 className="font-[600] px-2">{comment.name}</h4>
                </div>
              </div>
              <p className="py-2 ">{comment.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
