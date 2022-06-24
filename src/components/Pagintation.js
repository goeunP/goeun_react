import React from "react";

function Pagination(PostPerPage, totalPosts, currentPage, paginate) {
  const PageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    PageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination justify-content-center">
        {PageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              className="page-link"
              style={currentPage == number ? { color: "#17a2b8" } : null}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
