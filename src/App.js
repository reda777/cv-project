import React, {Component} from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
class App extends Component{
  constructor(props){
    super(props);
    this.state={
      renderId: 0,
      renderPart: 'default',
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleEnter=this.handleEnter.bind(this);
  }
  handleClick(e){
    this.setState({
      renderId: parseInt(e.target.parentNode.dataset.id),
      renderPart: (e.target.classList.length===0)?e.target.id:e.target.classList[0],
    });
  }
  handleEnter(e){
    if(e.key==="Enter"){
      this.setState({renderPart: 'default',})
    }
  }
  render(){
    return (
    <div className='main'>
      <Header renderPart={this.state.renderPart} handleEnter={this.handleEnter} handleClick={this.handleClick}/>
      <Experience renderId={this.state.renderId} renderPart={this.state.renderPart} handleEnter={this.handleEnter} handleClick={this.handleClick}/>
      <Education renderId={this.state.renderId} renderPart={this.state.renderPart} handleEnter={this.handleEnter} handleClick={this.handleClick}/>
      <Contact renderPart={this.state.renderPart} handleEnter={this.handleEnter} handleClick={this.handleClick}/>
      <Skills renderId={this.state.renderId} renderPart={this.state.renderPart} handleEnter={this.handleEnter} handleClick={this.handleClick}/>
    </div>
    ); 
  }
}
export default App;