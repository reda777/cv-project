import React, {Component} from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
class App extends Component{
  render(){
    return (
    <div className='main'>
      <Header />
      <Experience />
      <div className='education'>
        
      </div>
      <div className='contact'>

      </div>
      <div className='skills'>
        
      </div>
    </div>
    ); 
  }
}
export default App;