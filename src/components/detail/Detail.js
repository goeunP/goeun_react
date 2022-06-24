import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailList from "./DetailList";

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
function getById(id) {
  const array = mockData.filter((x) => x.id == id);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

function Detail({ history, location, match }) {
  const [loading, setLoading] = useState(true);
  const [details, setDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setDetail(getById(id));
  });
  return (
    <div className="detail">
      <h5>게시글 번호</h5>
      <h5>{details.id}</h5>

      <h1>{details.title}</h1>

      <h5>작성자</h5>
      <h5>{details.writer}</h5>

      <h5>분류</h5>
      <h5>{details.category}</h5>

      <p>{details.body}</p>
    </div>
  );
}

//버튼 추가

export default Detail;
