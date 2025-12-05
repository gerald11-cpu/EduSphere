import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Button, FloatingLabel, Form } from "react-bootstrap";

// Firebase
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

function Studentlogin() {
  const navigate = useNavigate();

  // Student Login State
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");

  // Signup State
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [flag, setFlag] = useState(false);

  // Student Login
  const handleStudentLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        studentEmail,
        studentPassword
      );
      const user = userCredential.user;
      const docSnap = await getDoc(doc(db, "users", user.uid));

      if (!docSnap.exists()) {
        alert("User not found");
        return;
      }

      if (docSnap.data().role !== "student") {
        alert("You are not a student!");
        return;
      }

      navigate("/Student");
    } catch (error) {
      alert("Invalid Login");
    }
  };

  // Signup
  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signupEmail,
        signupPassword
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email: signupEmail,
        role: "student",
      });

      alert("Registered Successfully!");
      setFlag(false);
    } catch (error) {
      alert("Registration Failed");
      console.log(error);
    }
  };

  return (
    <>
      <div>
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
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h1 className="display-3 fw-bold text-center mb-5">
              Welcome to EduSphere
            </h1>

            <div className="d-flex flex-wrap justify-content-center gap-4">
              {flag ? (
                // ================= SIGN-UP =====================
                <Card
                  className="text-center shadow-lg border-0"
                  style={{
                    width: "18rem",
                    height: "24rem",
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "white",
                  }}
                >
                  <Card.Body className="d-flex flex-column">
                    <h1 className="mb-3 fw-bold">Sign-up</h1>

                    <FloatingLabel label="Name" className="mb-2">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Email" className="mb-2">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-2">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                      />
                    </FloatingLabel>

                    <Button
                      className="btn btn-light fw-semibold mt-2"
                      onClick={handleRegister}
                    >
                      Register
                    </Button>

                    <p className="mt-3" onClick={() => setFlag(false)}>
                      Back to Login
                    </p>
                  </Card.Body>
                </Card>
              ) : (
                // ================= STUDENT LOGIN =====================
                <Card
                  className="text-center shadow-lg border-0"
                  style={{
                    width: "18rem",
                    height: "24rem",
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    color: "white",
                  }}
                >
                  <Card.Body className="d-flex flex-column">
                    <h1 className="mb-4 fw-bold">Student</h1>

                    <FloatingLabel label="Email" className="mb-3">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={studentEmail}
                        onChange={(e) => setStudentEmail(e.target.value)}
                      />
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-3">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={studentPassword}
                        onChange={(e) => setStudentPassword(e.target.value)}
                      />
                    </FloatingLabel>

                    <Button
                      className="btn btn-light fw-semibold"
                      onClick={handleStudentLogin}
                    >
                      Login
                    </Button>

                    <p className="mt-3" onClick={() => setFlag(true)}>
                      Sign-up
                    </p>
                  </Card.Body>
                </Card>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Studentlogin;
