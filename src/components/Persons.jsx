const Persons = ({ filteredPersons }) => {
  return (
    <li>
      {filteredPersons.map((person) => {
        return (
          <ul key={person.id}>
            {person.person} {person.number}
          </ul>
        );
      })}
    </li>
  );
};

export default Persons;
