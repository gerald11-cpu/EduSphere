import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Instructure from "./pages/Instructure";
import Student from "./pages/Student";
import Course from "./pages/Course";
import Studentlogin from "./pages/Studentlogin";
import Teacherlogin from "./pages/Teacherlogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Student-Login" element={<Studentlogin />} />
        <Route path="/Teacher-Login" element={<Teacherlogin />} />
        <Route path="/Instructure" element={<Instructure />} />
        <Route path="/Student" element={<Student />} />
        <Route path="/Courses" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;
