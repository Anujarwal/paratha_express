import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="font-[sans-serif] bg-[#213343] py-8 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-[#FFA726] font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFA726] font-bold text-lg mb-5">Services</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Testing Automation
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  AWS Development Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Mobile App Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFA726] font-bold text-lg mb-5">Platforms</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Hubspot
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Marketo Integration Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Marketing Glossary
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  UIPath
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFA726] font-bold text-lg mb-5">Company</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
          <p className="text-gray-300 text-[15px]">
            Copyright © 2024
            <a
              href="https://readymadeui.com/"
              target="_blank"
              className="hover:underline mx-1"
            >
              Paratha Express
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
