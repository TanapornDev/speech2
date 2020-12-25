import React from 'react'
import Navigation from './Navigation'
import Install from './components/Install'
import Testapi from './components/Testapi'
import Config from './components/Config'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import stt from './components/stt'
import tts from './components/tts'

function App() {
  return (

    <div class="App">

    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={Install} />
        <Route path="/components/Config" component={Config} />
        <Route path="/components/Testapi" component={Testapi} />
        <Route path="/components/stt" component={stt} />
        <Route path="/components/tts" component={tts} />
      </div>
    </Router>
    

    </div>

    



    
  );
}

export default App;




