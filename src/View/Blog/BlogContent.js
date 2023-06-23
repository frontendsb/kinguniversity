import React from "react";
import { Link } from "react-router-dom";

function BlogContent() {
  return (
    <>

<div className="blog_cnt">
    <div className="container-fluid">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <Link to='/page2' style={{textDecoration: 'none'}}>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          </Link>
          <Link to='/page3' style={{textDecoration: 'none'}}>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          </Link>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
      </div>
      </div>
    </>
  );
}

export default BlogContent;
