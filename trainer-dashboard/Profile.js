import React, { useState, useEffect } from "react";

const Profile = () => {
  const [trainerProfile, setTrainerProfile] = useState({
    name: "",
    email: "",
    expertise: "",
  });

  useEffect(() => {
    // Fetch trainer's profile from localStorage or API
    const storedProfile = JSON.parse(localStorage.getItem("trainerProfile")) || {};
    setTrainerProfile(storedProfile);
  }, []);

  const handleChange = (e) => {
    setTrainerProfile({
      ...trainerProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save updated profile to localStorage or API
    localStorage.setItem("trainerProfile", JSON.stringify(trainerProfile));
    alert("Profile updated successfully!");
  };

  return (
    <div className="dashboard-section">
      <h3>Profile</h3>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={trainerProfile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={trainerProfile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Expertise</label>
          <input
            type="text"
            name="expertise"
            value={trainerProfile.expertise}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;
