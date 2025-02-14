import React, { useState, useEffect } from "react";

const ManageTrainer = () => {
  const [trainerData, setTrainerData] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [batchName, setBatchName] = useState("");
  const [trainingDate, setTrainingDate] = useState("");
  const [trainingTime, setTrainingTime] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState("");

  // Static Trainer Email (Simulating Logged-in User)
  const trainerEmail = "trainer@example.com";

  useEffect(() => {
    // Simulating fetching trainer data
    setTrainerData({ email: trainerEmail });

    // Check if there's data in localStorage, otherwise use static data
    const storedSchedule =
      JSON.parse(localStorage.getItem("trainerSchedule")) || [];

    // If there's no stored data, use static data
    if (storedSchedule.length === 0) {
      const defaultSchedule = [
        {
          batchName: "Java Basics",
          trainingDate: "2025-03-01",
          trainingTime: "10:00",
          duration: "2",
        },
        {
          batchName: "React Fundamentals",
          trainingDate: "2025-03-05",
          trainingTime: "14:00",
          duration: "3",
        },
        {
          batchName: "Python Advanced",
          trainingDate: "2025-03-10",
          trainingTime: "16:00",
          duration: "2.5",
        },
      ];
      setSchedule(defaultSchedule);
      localStorage.setItem("trainerSchedule", JSON.stringify(defaultSchedule));
    } else {
      setSchedule(storedSchedule);
    }
  }, []);

  const handleAddSchedule = (e) => {
    e.preventDefault();
    if (batchName && trainingDate && trainingTime && duration) {
      const newBatch = {
        batchName,
        trainingDate,
        trainingTime,
        duration,
      };

      const updatedSchedule = [...schedule, newBatch];
      setSchedule(updatedSchedule);
      localStorage.setItem("trainerSchedule", JSON.stringify(updatedSchedule));

      // Reset form
      setBatchName("");
      setTrainingDate("");
      setTrainingTime("");
      setDuration("");
      setMessage("Batch added successfully!");
    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  const handleDeleteBatch = (index) => {
    const updatedSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(updatedSchedule);
    localStorage.setItem("trainerSchedule", JSON.stringify(updatedSchedule));
    setMessage("Batch removed successfully!");
  };

  return (
    <div className="manage-trainer">
      <div className="container">
        {trainerData ? (
          <div className="trainer-profile">
            <h2>Manage Your Training Schedule</h2>
            {message && <p className="message">{message}</p>}

            <div className="add-batch-form">
              <h3>Add Training Batch</h3>
              <form onSubmit={handleAddSchedule}>
                <div className="form-group">
                  <label>Batch Name</label>
                  <input
                    type="text"
                    value={batchName}
                    onChange={(e) => setBatchName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Training Date</label>
                  <input
                    type="date"
                    value={trainingDate}
                    onChange={(e) => setTrainingDate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Training Time</label>
                  <input
                    type="time"
                    value={trainingTime}
                    onChange={(e) => setTrainingTime(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Duration (in hours)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </div>
                <button type="submit">Add Batch</button>
              </form>
            </div>

            <div className="schedule">
              <h3>Your Training Schedule</h3>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Batch Name</th>
                    <th>Training Date</th>
                    <th>Training Time</th>
                    <th>Duration (hrs)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.length === 0 ? (
                    <tr>
                      <td colSpan="5">No scheduled batches</td>
                    </tr>
                  ) : (
                    schedule.map((batch, index) => (
                      <tr key={index}>
                        <td>{batch.batchName}</td>
                        <td>{batch.trainingDate}</td>
                        <td>{batch.trainingTime}</td>
                        <td>{batch.duration}</td>
                        <td>
                          <button
                            className="btn-delete"
                            onClick={() => handleDeleteBatch(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ManageTrainer;
