import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';

const CourseTable = (props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Course Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
      {props.courses.map(course => (
        <tr key={course.id}>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                props.deleteCourse(course.id);
                toast.success("Course deleted!");
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <Link to={`/course/${course.slug}`}>
              {course.title}
            </Link>
          </td>
          <td>{course.authorId}</td>
          <td>{course.category}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

CourseTable.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  })).isRequired
}

CourseTable.defaultProps = {
  courses: []
}

export default CourseTable;
