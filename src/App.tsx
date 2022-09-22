import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main} from "./components/Main/Main";
import {First} from "./components/First/First";
import {Second} from "./components/Second/Second";
import {SinglePost} from "./components/Second/SinglePost";
import {Layout} from "./components/Layout/Layout";

function App() {

  return (
    <BrowserRouter>
      <div className="App flex items-center flex-col">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path="first/*" element={<First/>}>
              <Route path="contacts" element={<p>Our contacts</p>}/>
              <Route path="team" element={<p>Our team</p>}/>
            </Route>
            <Route path="second" element={<Second/>}/>
            <Route path="second/:id" element={<SinglePost/>}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
