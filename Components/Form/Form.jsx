import React from 'react';

function Form({ numOfDogs, onChangeNums }) {
  return (
    <div>
      <label htmlFor="numDogs">Number of Dogs:</label>
      <input
        type="number"
        id="numDogs"
        name="numDogs"
        value={numOfDogs}
        onChange={onChangeNums}
      />
    </div>
  );
}

export default Form;
