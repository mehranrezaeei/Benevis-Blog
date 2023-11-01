import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full border-t mt-16 flex justify-center py-5">
      <div className="C-container flex flex-col w-full">
        <div className="flex md:flex-row flex-col py-3 w-full md:gap-0 gap-4">
          <div className="flex-1  border-t-[2px] py-2 flex justify-center items-center md:order-none order-2">
            <div className="flex flex-col items-center gap-1">
              <Link>پرسش و پاسخ</Link>
              <Link>ارتباط با ما</Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2 md:order-none order-1">
            <div className="flex flex-col items-center">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 507.2 646.14"
                className="w-10"
              >
                <path
                  d="M490,377.68A188.49,188.49,0,0,1,507.2,456.5c0,104.57-85.08,189.64-189.64,189.64h-261V64H0V0H120.54V582.14h197A125.72,125.72,0,0,0,442.32,441.57,188.89,188.89,0,0,1,317.56,488.5H142.38v-64H317.56a125.46,125.46,0,0,0,97.77-46.82,125.46,125.46,0,0,0-97.77-46.82H142.38v-64H317.56a188.89,188.89,0,0,1,124.76,46.93A125.72,125.72,0,0,0,317.56,173.22H142.38v-64H317.56c104.56,0,189.64,85.07,189.64,189.64A188.49,188.49,0,0,1,490,377.68Z"
                  fill="black"
                />
              </svg>
              <span className="uppercase font-mono text-lg">benevis</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-around w-full">
                {/* TWitter */}
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                    className="w-6 h-6 "
                  >
                    <path
                      fill="black"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </Link>
                {/* Youtube */}
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="800"
                    width="1200"
                    viewBox="-35.20005 -41.33325 305.0671 247.9995"
                    className="w-8 h-8"
                  >
                    <path
                      d="M229.763 25.817c-2.699-10.162-10.65-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.554 7.652 7.602 15.655 4.904 25.817 0 44.237 0 82.667 0 82.667s0 38.43 4.904 56.85c2.698 10.162 10.65 18.164 20.747 20.881 18.3 4.935 91.682 4.935 91.682 4.935s73.383 0 91.683-4.935c10.097-2.717 18.048-10.72 20.747-20.88 4.904-18.422 4.904-56.851 4.904-56.851s0-38.43-4.904-56.85"
                      fill="black"
                    />
                    <path
                      d="M93.333 117.558l61.334-34.89-61.334-34.893z"
                      fill="white"
                    />
                  </svg>
                </Link>
                {/* LinkedIn */}
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 30 30"
                    className="w-6 h-6"
                  >
                    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                  </svg>
                </Link>
              </div>
              <div className="w-[2px] h-12 my-3 bg-black rounded-full md:block hidden"></div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h6 className="font-[600]">مقالات هفتگی</h6>
              <div className="flex border-black border w-full">
                <input
                  type="text"
                  placeholder="ایمیل شما"
                  className="w-[70%] h-10 bg-transparent outline-none px-2 "
                />
                <button className="w-[30%] h-10 border-r-black border-r ">
                  ثبت
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 border-t-[2px] py-2 flex justify-center items-center md:order-none order-3 ">
            <div className="flex flex-col items-center gap-1">
              <Link>حریم خصوصی</Link>
              <Link>شرایط استفاده</Link>
              <Link>درباره</Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center pt-4">
          <a
            href="https://www.linkedin.com/in/mehranrezaei/"
            target="_blank"
            rel="noreferrer"
          >
            طراحی شده توسط مهران رضایی
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
