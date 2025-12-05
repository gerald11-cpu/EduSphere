import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { db } from "../firebase"; // import Firestore connection
import { collection, addDoc } from "firebase/firestore"; // Firestore methods

function FormModal() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "courses"), {
        subject,
        topic,
        description,
        thumbnail,
        type,
        createdAt: new Date(),
      });

      alert("✅ Course saved successfully!");

      // clear form
      setSubject("");
      setTopic("");
      setDescription("");
      setThumbnail("");
      setType("");
    } catch (error) {
      console.error("Error saving course:", error);
      alert("❌ Failed to save course. Check console for details.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="flex justify-column m-3">
        <InputGroup className="mb-3" style={{ height: "20px", width: "450px" }}>
          <InputGroup.Text>Subject</InputGroup.Text>
          <Form.Control
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ height: "20px", width: "450px" }}>
          <InputGroup.Text>Topic</InputGroup.Text>
          <Form.Control
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ height: "20px", width: "450px" }}>
          <InputGroup.Text>Description</InputGroup.Text>
          <Form.Control
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3" style={{ height: "20px", width: "450px" }}>
          <InputGroup.Text>Thumbnail Link</InputGroup.Text>
          <Form.Control
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </InputGroup>

        <Form.Label>Course Type</Form.Label>
        <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </Form.Select>

        <br />
        <Button variant="primary" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
}

export default FormModal;
