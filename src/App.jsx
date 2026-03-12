import { useState } from "react";
// import Course from "./components/Course.jsx";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");

  const addNumber = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.person === newName)) {
      alert(`${newName} is already added to phone book`);
      setNewName("");
      return;
    }

    const personObject = {
      person: newName,
      id: newName,
    };
    setPersons(persons.concat(personObject));
    setNewName("");
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phone book</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <li>
        {persons.map((person) => {
          return <ul key={person.id}>{person.person}</ul>;
        })}
      </li>
    </div>
  );
};

export default App;

/* function App() {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web development curriculum</h1>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </>
  );
}

export default App;
*/
