import React from "react";
import "../Styling/Blog.css";
import "../App.css"

export default function Blog() {
  return (
    <>
      <div className="blog_container light_mode">
        <div className="blog_upper_section">
          <div className="blog_title">
            <h1>BLOG</h1>
          </div>
        </div>
        <div className="blog_lower_section">
          <div className="blog_main_content">
            <div className="blog_content" >
              <div className="content_title">
                <h1 id="forbg_blog">3 Months of Web Development</h1>
              </div>
              <div className="conten_para">
                <p id="forbg_blog">
                  What I've learned in 3 months of web deveopment
                </p>
              </div>
              <div className="main_content">
                <p id="forbg_blog">
                  As many of you may know, I have been involved in Competitive
                  Programming for a very long time, and while preparing for
                  those contests, I didn't spend any of my time on actual
                  projects. Lately, I thought that it would be a good time to
                  branch out and try out stuff that I haven't done before. Now I
                  have to admit, I have done a bit of web development before I
                  went into CP, but it was barely anything. I had some basic
                  knowledge of HTML, CSS, PHP, and JavaScript (and JQuery,
                  remember when that was still a thing?). However, I didn't
                  really spend much time and the stuff I made looked like they
                  were from a time before I was even born.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="blog_more_buttons">
            </div>
      </div>
    </>
  );
}
