import { Grid, Typography } from "@mui/material";
import image4 from "../assets/istockphoto-1457979959-170667a.webp";
import React from "react";

const Blog = () => {
  return (
    <>
      {/* <div className="bg-white sm:px-6 px-4 py-10 font-[sans-serif]">
        <div className="max-w-xl mx-auto">
          <div>
            <h2 className="text-3xl font-extrabold text-[#333] inline-block">
              LATEST BLOGS
            </h2>
            <p className="text-gray-400 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              accumsan, nunc et tempus blandit, metus mi consectetur felis
              turpis vitae ligula.
            </p>
          </div>
          <hr className="my-10" />
          <div className="grid gap-16">
            <div className="cursor-pointer rounded overflow-hidden group">
              <div>
                <span className="text-sm block text-gray-400 mb-4">
                  10 FEB 2023
                </span>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                  A Guide to Igniting Your Imagination
                </h3>
                <div className="mt-6">
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <img
                  src="https://readymadeui.com/team-1.webp"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-xs text-gray-400">BY JOHN DOE</p>
              </div>
            </div>
            <div className="cursor-pointer rounded overflow-hidden group">
              <div>
                <span className="text-sm block text-gray-400 mb-4">
                  7 JUN 2023
                </span>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                  Hacks to Supercharge Your Day
                </h3>
                <div className="mt-6">
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-xs text-gray-400">BY MARK ADAIR</p>
              </div>
            </div>
            <div className="cursor-pointer rounded overflow-hidden group">
              <div>
                <span className="text-sm block text-gray-400 mb-4">
                  5 OCT 2023
                </span>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                  Trends and Predictions
                </h3>
                <div className="mt-6">
                  <p className="text-gray-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis accumsan, nunc et tempus blandit, metus mi consectetur
                    felis turpis vitae ligula.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-xs text-gray-400">BY SIMON KONECKI</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="bg-gray-50 font-[sans-serif] p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
          <div>
            <h2 className="text-4xl font-bold text-gray-300 uppercase mb-6">
              Blogs
            </h2>
            <h2 className="text-3xl font-extrabold text-[#333] uppercase leading-10">
              Discover Our Letest Blog Posts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
            <div className="cursor-pointer rounded overflow-hidden group">
              <video
                src="https://v.ftcdn.net/07/49/28/46/700_F_749284628_v85iZnb5GmcefbDjSRIzIfwTvJJqJzHW_ST.mp4"
                autoPlay
                muted
                alt="Blog Post 1"
                className="w-full h-52 object-cover"
              />
              <div className="py-6">
                <span className="text-sm block text-gray-400 mb-2">
                  10 FEB 2024 | BY JOHN DOE
                </span>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                  a plate of roti canai, a typical Indian food By Bejo
                </h3>
              </div>
            </div>
            <div className="cursor-pointer rounded overflow-hidden group">
              <video
                src="https://v.ftcdn.net/04/33/77/59/700_F_433775946_2cZXAXrJVhS7UiOZYoknwrIWLGNFuFCn_ST.mp4"
                alt="Blog Post 2"
                autoPlay
                muted
                className="w-full h-52 object-cover"
              />
              <div className="py-6">
                <span className="text-sm block text-gray-400 mb-2">
                  15 FEB 2024 | BY MARK ADAIR
                </span>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                  Super Slow Motion Shot of Falling and Stacking Parts of
                  Hamburger at 1000fps.
                </h3>
              </div>
            </div>
            <div className="cursor-pointer rounded overflow-hidden group">
              <video
                src="https://v.ftcdn.net/01/27/81/03/700_F_127810307_Y78PwmfMrhAwGcbCkRJmGGVYMLD7dJl2_ST.mp4"
                alt="Blog Post 3"
                autoPlay
                muted
                className="w-full h-52 object-cover"
              />
              <div className="py-6">
                <span className="text-sm block text-gray-400 mb-2">
                  20 FEB 2024 | BY SIMON KONECKI
                </span>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                  Disappearing pizza Hands taking all the pieces Stop motion
                  animation
                </h3>
              </div>
            </div>
            <div className="cursor-pointer rounded overflow-hidden group">
              <video
                src="https://v.ftcdn.net/06/09/99/85/700_F_609998554_7qgkKK1Qx9tmY5GmKXSGjF9Mj7q6CEXy_ST.mp4"
                alt="Blog Post 3"
                autoPlay
                muted
                className="w-full h-52 object-cover"
              />
              <div className="py-6">
                <span className="text-sm block text-gray-400 mb-2">
                  25 FEB 2024 | BY SIMON KONECKI
                </span>
                <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                  Super slow motion of preparing cocktails with speed motion.
                  Filmed on high speed cinema camera, 1000 fps, placed on high
                  speed cine bot. Bar with bottles on background. Speed ramp
                  effect
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <img src={image4} alt="image" />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h4"  >About Us</Typography>
          <Typography style={{ textAlign: "justify" }} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Typography variant="h4" >About Us</Typography>
          <Typography style={{ textAlign: "justify" , marginTop: "10px" }} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img src={image4} alt="image" />
        </Grid>
      </Grid> */}
    </>
  );
};

export default Blog;
