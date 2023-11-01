import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutation";

const CommentForm = ({ slug }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [text, settext] = useState("");
  const [sendComment, status] = useMutation(SEND_COMMENT, {
    variables: {
      name,
      email,
      text,
      slug,
    },
  });
  const sendCommentHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      alert("Invalid");
    }
  };
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-[2rem]">فرم ارسال کامنت</h1>
      </div>
      <div className="w-full my-2">
        <input
          type="text"
          placeholder="نام"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="w-full outline-none h-12 text-[1.2rem] border-b border-gray-800 px-2"
        />
      </div>
      <div className="w-full my-2">
        <input
          type="text"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-full outline-none h-12 text-[1.2rem] border-b border-gray-800 px-2"
        />
      </div>
      <div className="w-full my-2">
        <textarea
          className="border w-full outline-none border-gray-800 rounded-md p-2 text-[1.2rem] resize-none"
          rows="5"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="متن خود را وارد کنید"
        ></textarea>
      </div>
      <div>
        <button
          className="w-full h-14 rounded-md bg-medium-steel-blue-700 text-lg font-[600] text-white "
          onClick={sendCommentHandler}
        >
          ارسال
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
