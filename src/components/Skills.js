import React, { Component } from 'react';
class Skills extends Component{
  constructor(props){
    super(props);
    this.state={
      rows: [{id:0, skillName: 'skill', skillRange: 5 }]
    };
    this.handleClick=this.props.handleClick;
    this.handleChange=this.handleChange.bind(this);
    this.handleEnter=this.props.handleEnter;
    this.handleAdd=this.handleAdd.bind(this);
  }
  handleAdd(){
    if(this.state.rows.length<6){
      this.setState((state) => ({
        rows: state.rows.concat({ id: state.rows.length, skillName: 'skill', skillRange: 5 })
      }));
    }
  }
  handleChange(e){
    const value=e.target.value;
    const prop=e.target.id;
    const idToUpdate=e.target.parentNode.getAttribute("data-id");
    this.setState(prevState => ({
      rows: prevState.rows.map(row => {
        if (row.id === parseInt(idToUpdate)) {
          return {
            ...row,
            [prop]: value
          };
        }
        return row;
      })
    }));
  }
  renderSkillName(id){
    const renderPart=this.props.renderPart;
    const renderId=this.props.renderId;
    let skillNameDiv=(renderPart==='skillName' && renderId===id)?
                  (<input type='text' id='skillName' value={this.state.rows[id].skillName} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='skillName' onClick={this.handleClick}>{this.state.rows[id].skillName}</div>);
    return skillNameDiv;
  }
  renderSkillRange(id){
    const renderPart=this.props.renderPart;
    const renderId=this.props.renderId;
    let skillRangeDiv=(renderPart==='skillRange' && renderId===id)?
                  (<input type="range" min="1" max="10" name="skillRange" id='skillRange' value={this.state.rows[id].skillRange} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div data-id={id} className='skillRange' onClick={this.handleClick} ><div className='skillRange insideSkillRange' style={{width:7 * this.state.rows[id].skillRange+'px'}}></div></div>);
    return skillRangeDiv;
  }
  renderRows(){
    return this.state.rows.map((row,index)=>{
      return (
        <div className='skillsRow' data-id={index} key={index}>
          {this.renderSkillName(index)}
          {this.renderSkillRange(index)}
        </div>
      );
    })
  }
  render(){
    let rows=this.renderRows();
    return (
      <div className='skills'>
        <div className='title'>
          <div className='titleText'>SKILLS</div>
          <div className='addExp'>
            <svg  onClick={this.handleAdd} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1Z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
        <div className='rows'>
          {rows}
        </div>
      </div>
    ); 
  }
}
export default Skills;