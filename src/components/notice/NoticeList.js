import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoticeList({ id, title, category, date, writer }) {
  return (
    <div>
      <h2>
        <Link to={`/notice/${id}`}>{title}</Link>
      </h2>
      <h3>{category}</h3>
      <p>{date}</p>
      <p>{writer}</p>
    </div>
  );
}

NoticeList.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NoticeList;
