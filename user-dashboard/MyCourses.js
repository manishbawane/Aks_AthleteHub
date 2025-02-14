import React, { useState, useEffect } from "react";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Check for existing courses in localStorage
    const storedCourses = JSON.parse(localStorage.getItem("userCourses")) || [];

    // If no courses exist, use static data
    if (storedCourses.length === 0) {
      const defaultCourses = [
        {
          name: "Java Programming",
          duration: "4 Weeks",
          instructor: "John Doe",
          status: "Ongoing",
        },
        {
          name: "React Development",
          duration: "6 Weeks",
          instructor: "Jane Smith",
          status: "Completed",
        },
        {
          name: "Python for Data Science",
          duration: "8 Weeks",
          instructor: "David Miller",
          status: "Ongoing",
        },
        {
          name: "Cybersecurity Basics",
          duration: "5 Weeks",
          instructor: "Alex Johnson",
          status: "Upcoming",
        },
        {
          name: "Machine Learning",
          duration: "10 Weeks",
          instructor: "Emily Davis",
          status: "Ongoing",
        },
        {
          name: "Web Development",
          duration: "7 Weeks",
          instructor: "Chris Brown",
          status: "Completed",
        },
        {
          name: "Cloud Computing",
          duration: "6 Weeks",
          instructor: "Michael Lee",
          status: "Upcoming",
        },
      ];
      setCourses(defaultCourses);
      localStorage.setItem("userCourses", JSON.stringify(defaultCourses));
    } else {
      setCourses(storedCourses);
    }
  }, []);

  return (
    <div className="dashboard-section">
      <h3>My Courses</h3>
      {courses.length > 0 ? (
        <table className="courses-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Instructor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.instructor}</td>
                <td>{course.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No courses enrolled yet.</p>
      )}
    </div>
  );
};

export default MyCourses;
