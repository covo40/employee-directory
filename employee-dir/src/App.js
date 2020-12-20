import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import employee from './friends.json';

function App() {
  return (
    <Wrapper>
      <Title>Employee List</Title>
      <EmployeeCard
        name={employee[0].name}
        image={employee[0].image}
        occupation={employee[0].occupation}
        location={employee[0].location}
      />
      <FriendCard
        name={employee[1].name}
        image={employee[1].image}
        occupation={employee[1].occupation}
        location={employee[1].location}
      />
      <FriendCard
        name={employee[2].name}
        image={employee[2].image}
        occupation={employee[2].occupation}
        location={employee[2].location}
      />
    </Wrapper>
  );
}

export default App;
