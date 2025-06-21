// React frontend code placeholder
import React, { useEffect, useState } from 'react';

function App() {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/medications')
      .then(res => res.json())
      .then(data => setMedications(data));
  }, []);

  return (
    <div>
      <h1>Medication List</h1>
      <ul>
        {medications.map((med, index) => (
          <li key={index}>{med.name} - {med.dosage}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
