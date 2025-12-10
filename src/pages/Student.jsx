import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Student() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Get Logged-in Student ID
  const studentId = localStorage.getItem("studentId");

  if (!studentId) {
    return (
      <h3 className="text-center mt-5 text-danger">
        No student logged in! Please login again.
      </h3>
    );
  }

  // 🔹 Fetch Enrolled Courses
  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, "students", studentId, "enrolledCourses")
        );

        const courses = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEnrolledCourses(courses);
      } catch (error) {
        console.error("Error loading enrolled courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [studentId]);

  // 🔹 Handle Unenroll
  const handleUnenroll = async (courseId) => {
    try {
      await deleteDoc(
        doc(db, "students", studentId, "enrolledCourses", courseId)
      );

      setEnrolledCourses((prev) =>
        prev.filter((course) => course.id !== courseId)
      );

      alert("You have been unenrolled from the course.");
    } catch (error) {
      console.error("Error unenrolling:", error);
      alert("Failed to unenroll. Try again.");
    }
  };

  if (loading) {
    return <h4 className="text-center mt-5">Loading your courses...</h4>;
  }

  return (
    <>
      {/* -------- HEADER -------- */}
      <div className="flex justify-between items-center p-3 md:px-20">
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">Student Dashboard</h1>
        </div>

        <div className="md:flex justify-items-center items-center hidden">
          <Link to={"/"}>
            <button className="border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white flex items-center gap-2">
              <CiUser /> Logout
            </button>
          </Link>
        </div>
      </div>

      {/* -------- WELCOME BAR -------- */}
      <div className="w-full p-3 bg-black text-white">
        <marquee>
          Welcome, Student! You're all set to explore and enhance your learning
          journey. Let’s get started!
        </marquee>
      </div>

      {/* -------- PROFILE SECTION -------- */}
      <div className="flex flex-col items-center mt-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrs-3w47KbuNFQtM75g8ma9rcsB1VNrj-hPKf4jbJQcH0sA8AyfD4W0btbeWzVVX1GEOk&usqp=CAU"
          alt="Student Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg"
        />

        <h1 className="text-lg font-semibold mt-4 text-gray-800">
          Student Name
        </h1>
        <p className="text-sm text-gray-500">Active Learner</p>
      </div>

      {/* -------- ENROLLED COURSES -------- */}
      <div className="container my-5">
        <h2 className="text-center mb-4">My Enrolled Courses</h2>

        {enrolledCourses.length === 0 ? (
          <p className="text-center text-muted">
            You haven’t enrolled in any courses yet.
          </p>
        ) : (
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {enrolledCourses.map((course) => (
              <Card
                key={course.id}
                className="shadow-sm"
                style={{ width: "20rem", backgroundColor: "#f8f9fa" }}
              >
                {/* YouTube Video */}
                {course.thumbnail && (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      overflow: "hidden",
                      borderRadius: "10px 10px 0 0",
                    }}
                  >
                    <iframe
                      width="100%"
                      height="180"
                      src={course.thumbnail}
                      title={course.topic}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Card Body */}
                <Card.Body className="text-center">
                  <Card.Title>{course.topic}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>

                  <Button
                    variant="outline-danger"
                    onClick={() => handleUnenroll(course.id)}
                  >
                    Unenroll
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Student;
