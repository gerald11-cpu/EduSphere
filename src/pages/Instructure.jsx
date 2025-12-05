import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import FormModal from "../components/FormModal";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
function Instructure() {
  const [inputModal, setInputModal] = useState(false);
  return (
    <>
      {" "}
      <Header /> <br /> <br /> <br /> <br /> <br />{" "}
      <div
        className="d-flex flex-column align-items-center justify-content-center vh-100 "
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
        }}
      >
        {" "}
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {" "}
          {/* Instructure Card */}{" "}
          <Card
            className="text-center shadow-lg border-0"
            style={{
              width: "18rem",
              height: "20rem",
              background: "linear-gradient(135deg, #007bff, #00b4d8)",
              color: "white",
              borderRadius: "20px",
              transition: "all 0.3s ease-in-out",
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
              {inputModal ? (
                <Button
                  onClick={() => setInputModal(!inputModal)}
                  variant="light"
                  className="fw-semibold px-4"
                >
                  {" "}
                  Go Back{" "}
                </Button>
              ) : (
                <Button
                  onClick={() => setInputModal(!inputModal)}
                  variant="light"
                  className="fw-semibold px-4"
                >
                  {" "}
                  Add Course{" "}
                </Button>
              )}{" "}
            </Card.Body>{" "}
          </Card>{" "}
          {inputModal && <FormModal />} <br /> <CourseCard />{" "}
        </div>{" "}
      </div>{" "}
      <Footer />{" "}
    </>
  );
}
export default Instructure;
