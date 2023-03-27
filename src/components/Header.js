import React, {Component} from 'react';
import faceImage from '../images/image1.jpg';
class Header extends Component{
  constructor(){
    super();
    this.state={
      renderPart: 'default',
      personalImg: faceImage,
      name: "HOWARD AUSTIN",
      currentJob: "Graphic Designer",
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleEnter=this.handleEnter.bind(this);
    this.handleImageChange=this.handleImageChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value,
    });
  }
  renderMapObject(){
    const renderMap = {
      name: (
        <form>
          <span id='personalImg'>
            <label>
              <input type="file" accept="image/jpeg, image/png, image/gif, image/svg+xml" onChange={this.handleImageChange} />
              <img alt='Your Face' src={this.state.personalImg} />
            </label>
          </span>
          <input type='text' id='name' value={this.state.name} onChange={this.handleChange} onKeyDown={this.handleEnter}/>
          <span id='currentJob' onClick={this.handleClick}>{this.state.currentJob}</span>
        </form>
      ),
      currentJob: (
        <form>
          <span id='personalImg'>
            <label>
              <input type="file" accept="image/jpeg, image/png, image/gif, image/svg+xml" onChange={this.handleImageChange} />
              <img alt='Your Face' src={this.state.personalImg} />
            </label>
          </span>
          <span id='name' onClick={this.handleClick}>{this.state.name}</span>
          <input type='text' id='currentJob' value={this.state.currentJob} onChange={this.handleChange} onKeyDown={this.handleEnter}/>
        </form>
      ),
      default: (
        <form>
          <span id='personalImg'>
            <label>
              <input type="file" accept="image/jpeg, image/png, image/gif, image/svg+xml" onChange={this.handleImageChange} />
              <img alt='Your Face' src={this.state.personalImg} />
            </label>
          </span>
          <span id='name' onClick={this.handleClick}>{this.state.name}</span>
          <span id='currentJob' onClick={this.handleClick}>{this.state.currentJob}</span>
        </form>
      )
    };
    return renderMap;
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
  handleImageChange(event){
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(selectedFile);
      this.setState({
        personalImg: imageUrl,
      });
    }else{
      console.log("wrong file type");
    }
  }
  render(){
    const renderPart=this.state.renderPart;
    let renderMap=this.renderMapObject();
    let form=renderMap[renderPart] || renderMap.default;
    return (
      <div className='header'>
        {form}
      </div>
    ); 
  }
}
export default Header;