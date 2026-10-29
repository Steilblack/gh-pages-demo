import React, { useEffect, useState } from 'react';
import api, { RESPONSE_DATA } from './api';
import './App.css';

function App() {
  const [data, setData] = useState<RESPONSE_DATA>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get.data();
        setData(response);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px', fontSize: '24px' }}>
      {data ? <p>{data.greeting}</p> : <p>Loading data...</p>}
    </div>
  );
}

export default App;
