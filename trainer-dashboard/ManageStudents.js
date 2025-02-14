import React, { useState, useEffect } from "react";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch the list of students from localStorage or API
    const storedStudents = JSON.parse(localStorage.getItem("trainerStudents")) || [];
    setStudents(storedStudents);
  }, []);

  return (
    <div className="dashboard-section">
      <h3>Manage Students</h3>
      {students.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No students assigned yet.</p>
      )}
    </div>
  );
};

export default ManageStudents;
