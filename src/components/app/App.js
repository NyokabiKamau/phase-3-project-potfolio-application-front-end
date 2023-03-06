import './App.css';
import { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Home from "../home/home";
import Header from '../navbar/header';
// import Landingpage from '../landingpage/landingpage';
import Login from '../login/login';
import CreateProject from '../add-project/create-project';
import Skill from '../skills/skills-data/skills';
import UserProject from '../user-project/user-project';
import Project from '../project/project';


function App() {
  const [token, setToken] = useState()
  
  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <>
      {/* <Landingpage/> */}
      {/* <Login/> */}
      <Header/>
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skill />} />
          {/* <Route path="/auth/reg" element={<Login />} /> */}
          <Route path="/projects/create" element={<CreateProject/>}/>
        </Routes>
      </main>
     
    </>
  )
}

export default App;
