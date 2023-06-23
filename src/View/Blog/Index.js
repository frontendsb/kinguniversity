import React from "react";
import BlogContent from "./BlogContent";
import Bbg from "../../images/blog-title-bg.jpg";
import "./Blog.css";
import Page1 from "./Page1";

function Index() {
  return (
    <>
      <div id="all_banner" style={{ backgroundImage: `url('${Bbg}')` }}>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Blog
            </li>
          </ol>
          <h2>Blog</h2>
        </nav>
      </div>
      <Page1 />
      <BlogContent />
    </>
  );
}

export default Index;
