import React, {Component} from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
class App extends Component{
  render(){
    return (
    <div className='main'>
      <Header />
      <Experience />
      <Education />
      <Contact />
      <Skills />
    </div>
    ); 
  }
}
export default App;