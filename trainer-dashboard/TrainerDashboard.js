import React, { useEffect, useState } from "react";
import TrainerSidebar from "../trainer-dashboard/TrainerSidebar";
import "../styles/TrainerDashboard.css";

const TrainerDashboard = () => {
  const [trainerData, setTrainerData] = useState({
    name: "Michael Johnson",
    email: "trainer@example.com",
    students: [
      { id: 1, name: "John Doe", sport: "Soccer", progress: "Advanced" },
      {
        id: 2,
        name: "Emma Smith",
        sport: "Basketball",
        progress: "Intermediate",
      },
      { id: 3, name: "Chris Evans", sport: "Tennis", progress: "Beginner" },
      { id: 4, name: "Sophia Brown", sport: "Swimming", progress: "Advanced" },
    ],
  });

  const handleDelete = (id) => {
    setTrainerData((prevData) => ({
      ...prevData,
      students: prevData.students.filter((student) => student.id !== id),
    }));
  };

  const handleEdit = (id) => {
    const newProgress = prompt("Enter new progress level:");
    if (newProgress) {
      setTrainerData((prevData) => ({
        ...prevData,
        students: prevData.students.map((student) =>
          student.id === id ? { ...student, progress: newProgress } : student
        ),
      }));
    }
  };

  return (
    <div className="trainer-dashboard">
      <TrainerSidebar />
      <div className="container">
        <div className="profile">
          <h2>Welcome, {trainerData.name}</h2>
          <p>Email: {trainerData.email}</p>
        </div>

        <div className="manage-students">
          <h3>Your Students</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Sport</th>
                <th>Progress Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {trainerData.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.sport}</td>
                  <td>{student.progress}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(student.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
