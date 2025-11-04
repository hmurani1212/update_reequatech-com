import React from 'react';
import { FaLinkedin, FaGithubSquare  } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer>
        <div className="bg-gray-800 py-4 text-gray-400 mt-20">
          <div className="container px-4 mx-auto">
            <div className="-mx-4 flex flex-wrap justify-between">
              <div className="px-4 my-4 w-full xl:w-1/5">
                <a href="/" className="block w-56 mb-10">
                  <svg
                    version="1.1"
                    viewBox="0 0 3368 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(0 -75)">
                        <g transform="translate(0 75)">
                          <rect width={512} height={512} rx={128} fill="#3D5AFE" />
                          <rect
                            x={149}
                            y={176}
                            width={220}
                            height={220}
                            fill="#fff"
                          />
                          <circle cx={259} cy={156} r={40} fill="#fff" />
                          <circle cx={369} cy={286} r={40} fill="#2962FF" />
                        </g>
                        <text
                          fill="white"
                          fontFamily="Nunito-Bold, Nunito"
                          fontSize={512}
                          fontWeight="bold"
                        >
                          <tspan x={654} y={518}>
                            RAAQUATECH
                          </tspan>
                        </text>
                      </g>
                    </g>
                  </svg>
                </a>
                <p className="">
                  RAAQUATECH is a cutting-edge IT solutions provider dedicated to empowering businesses with innovative technology.
                </p>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                    Company
                  </h2>
                </div>
                <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                {/* <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                    Blog
                  </h2>
                </div> */}
                {/* <ul className="leading-8">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Stay updated with the latest trends
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      and insights in the IT industry.
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Discover best practices and expert
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      tips to enhance your business operations.
                    </a>
                  </li>
                </ul> */}
              </div>
              <div className="px-4 my-4 w-full sm:w-auto xl:w-1/5">
                <div>
                  <h2 className="inline-block text-2xl pb-4 mb-4 border-b-4 border-blue-600">
                    Connect With Us
                  </h2>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <svg
                    className="w-4 h-4 fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400"
                >
                  <FaGithubSquare  className="text-white" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400"
                >
                  <FaLinkedin className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-300 py-4 text-[rgb(69, 154, 185)">
              <div className="w-full text-center sm:w-auto sm:text-center">
                Copyright © 2024 - 2024 RAAQUATECH. All Rights Reserved.
              </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
