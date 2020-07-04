import React, {useState, useEffect} from 'react';
import courseStore from "../stores/courseStore";
import {Link} from 'react-router-dom';
import CourseTable from './CourseTable';
import {loadCourses, deleteCourse} from '../actions/courseActions';

const CoursesPage = () => {

  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courses.length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, [courses.length])

  const onChange = () => {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseTable courses={courses} deleteCourse={deleteCourse}/>
    </>
  );

}

export default CoursesPage;
