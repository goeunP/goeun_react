import React, { useState, useEffect } from "react";
import { mockComponent } from "react-dom/test-utils";
import { Link } from "react-router-dom";
import NoticeList from "./NoticeList";
// import Pagination from "./Pagination";

const mockData = [
  {
    id: 1,
    title: "공지1",
    body: "내용1",
    date: "2022-06-19",
    writer: "문태주",
    category: "백앤드",
  },
  {
    id: 2,
    title: "공지2",
    body: "내용2",
    date: "2022-06-20",
    writer: "문태주",
    category: "프론트앤드",
  },
  {
    id: 3,
    title: "공지3",
    body: "내용3",
    date: "2022-06-21",
    writer: "문태주",
    category: "기획/디자인",
  },
];

console.log(mockData);

function Notice() {
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  const getNotice = async () => {
    setNotices(mockData);
    setLoading(false);
  };
  useEffect(() => {
    getNotice();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {notices.map((notice) => (
            <NoticeList
              key={notice.id}
              id={notice.id}
              title={notice.title}
              date={notice.date}
              writer={notice.writer}
              category={notice.category}
              body={notice.body}
            />
          ))}
        </div>
      )}
    </div>
  );
}

//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPate] = useState(1);
//   const [postPerPage] = useState(10);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
// return (
//   <div className="noticeboard-warp">
//     <ul className="list-wrap">
//       <li class=" ">
//         <dl className="noticelist-wrap">
//           <dt className="noticelist-title">
//             <span className="noticelist-category"></span>
//             <a href="/noticeDetail/">
//               <td>{mockData[0].title}</td>
//             </a>
//             <span className="noticelst-new">NEW</span>
//           </dt>
//           <dd className="noticelist-detail"></dd>
//           <ul>
//             <li>{mockData[0].category}</li>
//             <li>{mockData[0].date}</li>
//             <li>{mockData[0].writer}</li>
//           </ul>
//         </dl>
//       </li>
//     </ul>
//   </div>

// <div
//   className="container"
//   style={{ fontFamily: "Noto Sans Korean, Malgun Gothic, snas-serif" }}
// >
//   <div className="1f-menu-nav">
//     <span>공지사항</span>
//   </div>
//   <div className="1f-contents pd12">
//     <div className="top-controls">
//       <a href="/noticeWrite">
//         <button className="1f-button primary float-right">글쓰기</button>
//       </a>
//     </div>
//     <div style={{ padding: "0 12px" }}>
//       <table className="board_list text-center">
//         <colgroup>
//           <col width="10%" />
//           <col width="*" />
//           <col width="50%" />
//           <col width="*" />
//           <col width="*" />
//           <col width="*" />
//           <col width="*" />
//         </colgroup>
//         <thead>
//           <tr>
//             <th>제목</th>
//             <th>내용</th>
//             <th>작성일시</th>
//             <th>작성자</th>
//             <th>분류</th>
//           </tr>
//         </thead>
//         <tbody>
//           {mockData.map((item) => (
//             <tr>
//               <td>{item.title}</td>
//               <td>{item.body}</td>
//               <td>{item.date}</td>
//               <td>{item.writer}</td>
//               <td>{item.category}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.lenght}
          CurrentPage={currentPage}
          paginate={paginate}
        ></Pagination> */

//       </div>
//     </div>

export default Notice;
