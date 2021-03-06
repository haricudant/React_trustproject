import React from "react";
import "./FollowUs.css";

export default function FollowUs() {
  return (
    <div>
      {" "}
      <div class="jumbotron bg-white">
        <h3 class="text-center mb-5 follow">
          {/* <img src={logo} width="100" height="100" /> */}
          Follow our blog for updated content
        </h3>
        <p class=" text-center w-responsive mx-auto mb-0 content">
          We are always on our feet, searching for projects and people in need
          to make their lives better.
        </p>
        <p class=" text-center w-responsive mx-auto mb-5 content ">
          We keep you updated on our active projects for which your support is
          extremely beneficial.
        </p>

        <div class="row justify-content-center">
          <button type="submit" class="buttn">
            Check our blog
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
