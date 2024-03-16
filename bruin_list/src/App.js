import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const[data, setData] = useState(null);

  const apiCall = async () => {
    try {
      const response = await axios.get('http://localhost:4000');
      // Step 3: Update the state with the API response data
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Optionally, handle errors by setting state or showing error message
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={apiCall}>Make API Call</button>
        {data &&(
          <h1>{JSON.stringify(data.hi)}</h1>
        )
        }
      </header>
    </div>
  );
}

export default App;
