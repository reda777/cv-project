import React, {Component} from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
class App extends Component{
  render(){
    return (
    <div className='main'>
      <Header />
      <Experience />
      <Education />
      <div className='contact'>

      </div>
      <div className='skills'>
        
      </div>
    </div>
    ); 
  }
}
export default App;