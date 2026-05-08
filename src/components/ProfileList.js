import ProfileCard from "./ProfileCard";

function ProfileList({ students, onToggleStatus }) {
  return (
    <section className="profile-list">
      {students.map((student) => (
        <ProfileCard
          key={student.id}
          student={student}
          onToggle={onToggleStatus}
        />
      ))}
    </section>
  );
}

export default ProfileList;
