import React, { useState, useEffect} from 'react';
import Data from './assets/data.json';
import JobBoardCompornet from "./components/JobBoardComponent";

console.log(Data);

function App() {
  const [jobs, setjobs] = useState([]);


  useEffect(() => setjobs(Data), [] );
  return (
    <div className="App">
      <header bg-teal-500 mb-12>
        <img src='./images/bg-header-desktop.svg' alt='header' className='w-full' />
      </header>
      {
        jobs.length === 0 ? (
          <p>jobs are fetching...</p>
        ) : (
          jobs.map((job) => <JobBoardCompornet job={job} key={job.id} />)
        )
      }
    
    </div>
  ); 
}

export default App;