function Course({ course }) {
  let total = 0;

  return (
    <div>
      <h1>{course.name}</h1>
      <div>
        {course.parts.map((part) => (
          <p key={part.id}>
            {part.name} {part.exercises} {(total += part.exercises)}
          </p>
        ))}
        <p style={{ fontWeight: "bold" }}>Total of {total} exercises</p>
      </div>
    </div>
  );
}

export default Course;
