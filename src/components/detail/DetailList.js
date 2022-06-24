import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DetailList({ id, title, category, date, writer, body }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{category}</h3>
      <h3>{date}</h3>
      <h3>{writer}</h3>
      <p>{body}</p>
    </div>
  );
}

DetailList.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  writer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default { DetailList };
