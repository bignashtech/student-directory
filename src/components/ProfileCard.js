function ProfileCard({ student, onToggle }) {
  return (
    <article
      className={`profile-card ${student.isActive ? "active" : "inactive"}`}
    >
      <div className="card-top">
        <div className="avatar">{student.name.charAt(0)}</div>
        <div>
          <h2>{student.name}</h2>
          <p className="track">{student.track}</p>
        </div>
      </div>
      <p className="bio">{student.bio}</p>
      <div className="card-details">
        <span className="skill">Skill level: {student.skillLevel}</span>
        {student.isActive ? (
          <span className="status active">Active</span>
        ) : (
          <span className="status inactive">Inactive</span>
        )}
      </div>
      <button className="toggle-button" onClick={() => onToggle(student.id)}>
        {student.isActive ? "Set Inactive" : "Set Active"}
      </button>
    </article>
  );
}

export default ProfileCard;
