import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // Check for existing schedule in localStorage
    const storedSchedule =
      JSON.parse(localStorage.getItem("trainerSchedule")) || [];

    // If no schedule exists, use static data
    if (storedSchedule.length === 0) {
      const defaultSchedule = [
        {
          day: "Monday",
          time: "10:00 AM - 12:00 PM",
          course: "Java Programming",
        },
        {
          day: "Tuesday",
          time: "02:00 PM - 04:00 PM",
          course: "React Development",
        },
        {
          day: "Wednesday",
          time: "09:00 AM - 11:00 AM",
          course: "Python for Data Science",
        },
        {
          day: "Thursday",
          time: "01:00 PM - 03:00 PM",
          course: "Machine Learning",
        },
        {
          day: "Friday",
          time: "11:00 AM - 01:00 PM",
          course: "Cybersecurity Basics",
        },
        {
          day: "Saturday",
          time: "03:00 PM - 05:00 PM",
          course: "Cloud Computing",
        },
      ];
      setSchedule(defaultSchedule);
      localStorage.setItem("trainerSchedule", JSON.stringify(defaultSchedule));
    } else {
      setSchedule(storedSchedule);
    }
  }, []);

  return (
    <div className="dashboard-section">
      <h3>Trainer's Schedule</h3>
      {schedule.length > 0 ? (
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((session, index) => (
              <tr key={index}>
                <td>{session.day}</td>
                <td>{session.time}</td>
                <td>{session.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No schedule available.</p>
      )}
    </div>
  );
};

export default Schedule;
