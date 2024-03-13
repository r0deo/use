import React from 'react';

const DogList = ({ dogImage }) => {
  return (
    <div>
      <h2>Dog List</h2>
      <ul>
        {dogImage.map((dog, index) => (
          <li key={index}>
            <img src={dog} alt={`Dog ${index + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;