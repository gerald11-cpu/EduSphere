import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  return (
    <>
      {" "}
      {/* Header */} <Header />{" "}
      {/* HERO SECTION WITH TRANSPARENT CARDS ON TOP */}{" "}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-white"
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {" "}
        {/* Overlay for better visibility */}{" "}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
          }}
        ></div>{" "}
        {/* CONTENT ABOVE IMAGE */}{" "}
        <div style={{ position: "relative", zIndex: 2 }}>
          {" "}
          <h1 className="display-3 fw-bold text-center mb-5">
            {" "}
            Welcome to EduSphere{" "}
          </h1>{" "}
          {/* Transparent Glass Cards */}{" "}
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {" "}
            {/* Student Card */}{" "}
            <Card
              className="text-center shadow-lg border-0"
              style={{
                width: "18rem",
                height: "20rem",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {" "}
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="mb-4 fw-bold">Student</h2>

                <button
                  className="btn btn-light fw-semibold px-4"
                  onClick={() => {
                    setRole("student");
                    navigate("/Student-Login");
                  }}
                >
                  Login
                </button>
              </Card.Body>
            </Card>{" "}
            {/* Teacher Card */}{" "}
            <Card
              className="text-center shadow-lg border-0"
              style={{
                width: "18rem",
                height: "20rem",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {" "}
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                {" "}
                <h2 className="mb-4 fw-bold">Teacher</h2>{" "}
                <button
                  className="btn btn-light fw-semibold px-4"
                  onClick={() => {
                    setRole("teacher");
                    navigate("/Teacher-Login");
                  }}
                >
                  Login
                </button>
              </Card.Body>{" "}
            </Card>{" "}
            {/* Courses Card */}{" "}
            <Card
              className="text-center shadow-lg border-0"
              style={{
                width: "18rem",
                height: "20rem",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "white",
                transition: "0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              {" "}
              <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                {" "}
                <h2 className="mb-4 fw-bold">Courses</h2>{" "}
                <Link to="/Courses" className="btn btn-light fw-semibold px-4">
                  {" "}
                  All Courses{" "}
                </Link>{" "}
              </Card.Body>{" "}
            </Card>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FEATURES SECTION */}{" "}
      <section className="py-5 bg-light">
        {" "}
        <div className="container text-center">
          {" "}
          <h2 className="fw-bold mb-4">Why Choose EduSphere?</h2>{" "}
          <div className="row g-4">
            {" "}
            <div className="col-md-4">
              {" "}
              <div className="p-4 shadow rounded bg-white">
                {" "}
                <h4>🧠 Expert Instructors</h4>{" "}
                <p>
                  {" "}
                  Learn from real experts who teach with clarity and passion.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              {" "}
              <div className="p-4 shadow rounded bg-white">
                {" "}
                <h4>🎯 Structured Courses</h4>{" "}
                <p>
                  {" "}
                  Detailed modules, high-quality videos, and practical content.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              {" "}
              <div className="p-4 shadow rounded bg-white">
                {" "}
                <h4>🚀 Learn Anytime</h4>{" "}
                <p>Access courses from anywhere, anytime, at your pace.</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* FOOTER */}{" "}
      <footer className="bg-dark text-white py-4 text-center">
        {" "}
        <p className="mb-0">
          {" "}
          © {new Date().getFullYear()} EduSphere. All rights reserved.{" "}
        </p>{" "}
      </footer>{" "}
    </>
  );
}
export default Dashboard;
