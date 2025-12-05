import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

function CourseCard() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState("Courses");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const courseList = querySnapshot.docs.map((doc) => {
          const data = doc.data() || {};

          // Extract YouTube embed src if full iframe stored
          let thumbnailSrc = data.thumbnail || "";
          const match = String(thumbnailSrc).match(/src="([^"]+)"/);
          if (match) thumbnailSrc = match[1];

          // Normalize course type (string -> lowercase -> trimmed)
          const typeValue = String(data.type || "")
            .trim()
            .toLowerCase();

          let courseType = "Free"; // default
          if (typeValue === "2" || typeValue === "paid") {
            courseType = "Paid";
          }

          return {
            id: doc.id,
            subject: data.subject || "General",
            topic: data.topic || "Untitled Topic",
            description:
              data.description ||
              data.discription ||
              "No description available",
            type: courseType,
            thumbnail: thumbnailSrc,
          };
        });

        setCourses(courseList);

        if (courseList.length > 0) {
          setSubject(courseList[0].subject);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <h4 className="text-center mt-5">Loading courses...</h4>;
  }

  const handleEnroll = async (course) => {
    try {
      const studentId = "student123"; // Replace this later with logged-in student's ID

      await setDoc(
        doc(db, "students", studentId, "enrolledCourses", course.id),
        {
          subject: course.subject,
          topic: course.topic,
          description: course.description,
          type: course.type,
          thumbnail: course.thumbnail,
          enrolledAt: new Date(),
        }
      );

      alert(`You have successfully enrolled in ${course.topic}!`);
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };

  return (
    <div className="container my-5">
      {/* Main heading from course subject */}
      <h2 className="text-center mb-4">{subject}</h2>

      {/* Scrollable card section */}
      <div
        className="d-flex overflow-auto gap-4 p-3"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "thin",
        }}
      >
        {courses.map((course) => (
          <Card
            key={course.id}
            className="shadow-sm flex-shrink-0"
            style={{
              width: "20rem",
              height: "26rem",
              scrollSnapAlign: "center",
              backgroundColor: "#f8f9fa",
            }}
          >
            {/* YouTube Embed */}
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
            <Card.Body className="d-flex flex-column justify-content-between text-center">
              <div>
                <h5>{course.topic}</h5>
                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                  {course.description}
                </p>
              </div>
              <Button
                variant={course.type === "Paid" ? "danger" : "primary"}
                onClick={() => handleEnroll(course)}
              >
                {course.type === "Paid" ? "Paid Enrollment" : "Enroll Free"}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CourseCard;
