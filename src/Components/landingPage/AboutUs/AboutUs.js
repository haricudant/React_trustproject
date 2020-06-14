import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div>
      <div className="head">
        <div className="container contentCenter">
          <p class=" about_us" > About Us</p>
          <p class = "about_us_para">
            We believe that the world is an amazing place because of the
            extravagant people who make it a memorable experience for each one
            of us. We believe in providing equal opportunity to everyone.
          </p>
				  <p class= "about_us_content">Content for about us section</p>
				  <div class="about_us_content"
            style={{
              marginTop: "50px",
             
            }}
          >
            content about us end here
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "-1px" }} />
    </div>
  );
}
