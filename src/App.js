import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [projects, setProjects] = useState([])
  
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://webapi-challenge-stretch.herokuapp.com/api/project')
    .then(response => {
      console.log(response)
      setProjects(response.data)
    })
  },[])

  return (
    <div className="App">
      {
        projects.map(project => {
          return(
            <div key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
