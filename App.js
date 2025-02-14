import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./admin-dashboard/AdminDashboard";
import UserDashboard from "./user-dashboard/UserDashboard";
// import TrainerDashboard from "./trainers-dashboard/TrainerDashboard";
import NotFound from "./components/NotFound";
import TrainerDashboard from "./trainer-dashboard/TrainerDashboard";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import AdminLogin from "./admin-dashboard/AdminLogin";
// import ManageCourses from "./admin-dashboard/ManageCourses";
import SignupForm from "./forms/SignupForm";
import ForgotPasswordForm from "./forms/ForgotPasswordForm";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./user-dashboard/RegisterForm";
import MailsList from "./components/MailList";
import ManageCourses from "./admin-dashboard/ManageCourses";
import ManageTrainer from "./admin-dashboard/ManageTrainers";
import AdminSidebar from "./admin-dashboard/AdminSidebar";
import ManageUsers from "./admin-dashboard/ManageUsers";
import MyCourses from "./user-dashboard/MyCourses";
import PaymentHistory from "./user-dashboard/PaymentHistory";
import Profile from "./user-dashboard/Profile";
import UserSidebar from "./user-dashboard/UserSidebar";
import TrainerSidebar from "./trainer-dashboard/TrainerSidebar";
import ManageStudents from "./trainer-dashboard/ManageStudents";
import Schedule from "./trainer-dashboard/Schedule";
// import TrainerSidebar from "./trainer-dashboard/TrainerSidebar";
// import UserDashboard from "./user-dashboard/UserDashboard";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />

        {/* ------------------------------Admin Dashboard----------------------------------------------- */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* <Route path="/admin-dashboard/manage-courses/add" element={<ManageCourses.js />} /> */}
        <Route path="/manageCourses" element={<ManageCourses />} />
        <Route path="/manageTrainer" element={<ManageTrainer />} />
        <Route path="/adminSidebar" element={<AdminSidebar />} />
        <Route path="/manage-users" element={<ManageUsers />} />

        {/* ---------------------------User Dashboard-------------------------------------------------- */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/myCourses" element={<MyCourses />} />
        <Route path="/paymentHistory" element={<PaymentHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userSidebar" element={<UserSidebar />} />
        {/* ----------------------------------------------------------------------------- */}

        {/* -------------------------------Trainer Dashboard---------------------------------------------- */}

        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        <Route path="/manageStudents" element={<ManageStudents />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/trainerSidebar" element={<TrainerSidebar />} />

        {/* ----------------------------------------------------------------------------- */}
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/trainer-dashboard" element={<TrainerDashboard />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mailList" element={<MailsList />} />

        <Route path="/navbar" element={<Navbar />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
