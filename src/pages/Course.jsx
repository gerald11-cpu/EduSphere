import React, { useState } from "react";
import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import Footer from "../components/Footer";
function Course() {
  // const [userInput, setUserInput] = useState({
  //   tada: {
  //     student: {
  //       email: "",
  //       password: "",
  //     },
  //     instructure: {
  //       email: "",
  //       password: "",
  //       course: {
  //         headind: "",
  //         thumbnail: "",
  //         subheadind: "",
  //       },
  //     },
  //   },
  // });
  return (
    <div>
      <Header />
      <CourseCard />
      <Footer />
    </div>
  );
}

export default Course;
