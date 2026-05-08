import { useState } from "react";
import Header from "./components/Header";
import ProfileList from "./components/ProfileList";
import Footer from "./components/Footer";
import "./App.css";

const initialStudents = [
  {
    id: 1,
    name: "Amina Sule",
    track: "Frontend Development",
    bio: "I love building beautiful websites using HTML, CSS and React.",
    skillLevel: "Beginner",
    isActive: true,
  },
  {
    id: 2,
    name: "Kofi Mensah",
    track: "Backend Development",
    bio: "I enjoy working with Node.js, APIs and databases like PostgreSQL.",
    skillLevel: "Intermediate",
    isActive: false,
  },
  {
    id: 3,
    name: "Fatima Issah",
    track: "UI/UX Design",
    bio: "I design user-friendly interfaces that solve real problems for people.",
    skillLevel: "Beginner",
    isActive: true,
  },
  {
    id: 4,
    name: "Kwame Asante",
    track: "Data Science",
    bio: "I analyze data and build models to find patterns and useful insights.",
    skillLevel: "Advanced",
    isActive: true,
  },
  {
    id: 5,
    name: "Hawa Dramani",
    track: "Cybersecurity",
    bio: "I study how to protect systems and networks from hackers and attacks.",
    skillLevel: "Intermediate",
    isActive: false,
  },
  {
    id: 6,
    name: "Yaw Boateng",
    track: "Mobile Development",
    bio: "I build Android and iOS apps using React Native for everyday people.",
    skillLevel: "Beginner",
    isActive: true,
  },
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  function toggleActive(id) {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id
          ? { ...student, isActive: !student.isActive }
          : student,
      ),
    );
  }

  return (
    <div className="app-shell">
      <Header />
      <ProfileList students={students} onToggleStatus={toggleActive} />
      <Footer total={students.length} />
    </div>
  );
}

export default App;
