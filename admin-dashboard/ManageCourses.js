import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../styles/AddCourse.css"; // Optional, for styling

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newCourse = {
      name: courseName,
      duration: courseDuration
    };

    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    storedCourses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(storedCourses));

    navigate("/admin-dashboard/manageCourses");
  };

  return (
    <div className="add-course-container">
      <h3>Add New Course</h3>
      <div>
        <label>Course Name:</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Enter course name"
        />
      </div>
      <div>
        <label>Duration:</label>
        <input
          type="text"
          value={courseDuration}
          onChange={(e) => setCourseDuration(e.target.value)}
          placeholder="Enter course duration"
        />
      </div>
      <button onClick={handleSubmit}>Add Course</button>
    </div>
  );
};

export default AddCourse;
