import React, {useState, useEffect} from 'react';
import AddCourseForm from './AddCourseForm';
import NotFoundPage from './NotFoundPage';
import courseStore from '../stores/courseStore';
import * as courseActions from '../actions/courseActions';
import {toast} from 'react-toastify';

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  });

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
        setCourse(courseStore.getCourseBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length, props.match.params.slug]);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  }

  const handleChange = ({target}) => {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  const formIsValid = () => {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid()) return;
    courseActions.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved!");
    });
  }

  return(
    <>
      <h2>Manage Course</h2>
      {!course?
        <NotFoundPage />:
        <AddCourseForm
          errors={errors}
          course={course}
          setCourse={handleChange}
          onSubmit={handleSubmit}
        />
      }

    </>
  )
}

export default ManageCoursePage;
