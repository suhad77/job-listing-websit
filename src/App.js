import React, { useState, useEffect} from 'react';
import Data from './assets/data.json';
import JobBoardCompornet from "./components/JobBoardComponent";

console.log(Data);

function App() {
  const [jobs, setjobs] = useState([]);

  const [filters, setFilters] = useState([]);

  useEffect(() => setjobs(Data), [] );

  const filterFunc = ({role, level,tools,languages}) => {
    if(filters.length ===0){
      return true;
    }

    const tags = [ role, level]

    if(languages) {
        tags.push(...languages);
    }
    if(tools) {
        tags.push(...tools);
    }

    return tags.some(tag => filters.includes(tag));;
  }

  const filtereJobs = jobs.filter(filterFunc);

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