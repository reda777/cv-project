import React, {Component} from 'react';
class Skills extends Component{
  constructor(){
    super();
    this.state={
        renderPart: 'default',
        address: '308 Negra Arroyo Lane, Albuquerque, New Mexico. 87104.',
        phone: '212-612345678',
        email: 'email-name@email.com',
        website: 'website.com',
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleEnter=this.handleEnter.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value,
    });
  }
  handleEnter(e){
    if(e.key==="Enter"){
      this.setState({renderPart: 0,})
    }
  }
  handleClick(e){
    this.setState({
      renderPart: e.target.id,
    });
  }
  renderAddress(){
    const renderPart=this.state.renderPart;
    let currentJobSpan=(renderPart==='address')?
                  (<input type='text' id='address' value={this.state.address} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<span id='address' onClick={this.handleClick}>{this.state.address}</span>);
    return currentJobSpan;
  }
  renderPhone(){
    const renderPart=this.state.renderPart;
    let currentJobSpan=(renderPart==='phone')?
                  (<input type='text' id='phone' value={this.state.phone} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<span id='phone' onClick={this.handleClick}>{this.state.phone}</span>);
    return currentJobSpan;
  }
  renderEmail(){
    const renderPart=this.state.renderPart;
    let currentJobSpan=(renderPart==='email')?
                  (<input type='text' id='email' value={this.state.email} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<span id='email' onClick={this.handleClick}>{this.state.email}</span>);
    return currentJobSpan;
  }
  renderWebsite(){
    const renderPart=this.state.renderPart;
    let currentJobSpan=(renderPart==='website')?
                  (<input type='text' id='website' value={this.state.website} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<span id='website' onClick={this.handleClick}>{this.state.website}</span>);
    return currentJobSpan;
  }
  render(){
    return (
      <div className='skills'>
        <div className='title'>
          <div className='titleText'>SKILLS</div>
        </div>
        <div className='rows'>
            
        </div>
      </div>
    ); 
  }
}
export default Skills;