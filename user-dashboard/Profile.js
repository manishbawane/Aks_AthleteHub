import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Fetch user's profile data from localStorage or an API
    const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {};
    setUserProfile(storedProfile);
  }, []);

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save updated profile to localStorage or API
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
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
            value={userProfile.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userProfile.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={userProfile.phone}
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
