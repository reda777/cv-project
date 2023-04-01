import React, {Component} from 'react';
class Experience extends Component{
  constructor(){
    super();
    this.state={
      renderId: 0,
      renderPart: 'default',
      rows: [{
        id: 0,
        jobTitle: 'Job Title',
        jobYears: '2020-2024',
        jobCompany: 'Company Name',
        jobDesc: 'Job description Job description Job description Job description Job description Job description Job description Job description Job description.',
      }],
    }
    this.handleAdd=this.handleAdd.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleEnter=this.handleEnter.bind(this);
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
  handleEnter(e){
    if(e.key==="Enter"){
      this.setState({renderPart: 'default',})
    }
  }
  handleClick(e){
    this.setState({
      renderId: parseInt(e.target.parentNode.dataset.id),
      renderPart: e.target.className,
    });
  }
  handleAdd(){
    if(this.state.rows.length<3){
      this.setState((state) => ({
        rows: state.rows.concat({
          id: state.rows.length,
          jobTitle: 'Job Title',
          jobYears: '2020-2024',
          jobCompany: 'Company Name',
          jobDesc: 'Job description Job description Job description Job description Job description Job description Job description Job description Job description.',
        })
      }));
    }
  }
  renderJobTitle(id){
    const renderPart=this.state.renderPart;
    const renderId=this.state.renderId;
    let jobTitleDiv=(renderPart==='jobTitle' && renderId===id)?
                  (<input type='text' id='jobTitle' value={this.state.rows[id].jobTitle} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='jobTitle' onClick={this.handleClick}>{this.state.rows[id].jobTitle}</div>);
    return jobTitleDiv;
  }
  renderJobYears(id){
    const renderPart=this.state.renderPart;
    const renderId=this.state.renderId;
    let jobYearsDiv=(renderPart==='jobYears' && renderId===id)?
                  (<input type='text' id='jobYears' value={this.state.rows[id].jobYears} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='jobYears' onClick={this.handleClick}>{this.state.rows[id].jobYears}</div>);
    return jobYearsDiv;
  } 
  renderJobCompany(id){
    const renderPart=this.state.renderPart;
    const renderId=this.state.renderId;
    let jobCompanyDiv=(renderPart==='jobCompany' && renderId===id)?
                  (<input type='text' id='jobCompany' value={this.state.rows[id].jobCompany} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='jobCompany' onClick={this.handleClick}>{this.state.rows[id].jobCompany}</div>);
    return jobCompanyDiv;
  }
  renderJobDesc(id){
    const renderPart=this.state.renderPart;
    const renderId=this.state.renderId;
    let jobDescDiv=(renderPart==='jobDesc' && renderId===id)?
                  (<input type='text' id='jobDesc' value={this.state.rows[id].jobDesc} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='jobDesc' onClick={this.handleClick}>{this.state.rows[id].jobDesc}</div>);
    return jobDescDiv;
  }
  renderRows(){
    return this.state.rows.map((row,index)=>{
      return (
        <div className='experienceRow' data-id={index} key={index}>
          <div className='square'></div>
          {this.renderJobTitle(index)}
          {this.renderJobYears(index)}
          {this.renderJobCompany(index)}
          {this.renderJobDesc(index)}
        </div>
      );
    })
  }
  render(){
    let rows=this.renderRows();
    return (
      <div className='experience'>
        <div className='title'>
          <div className='titleText'>Experience</div>
          <div className='addExp' onClick={this.handleAdd}><span>+</span></div>
        </div>
        {rows}
      </div>
    ); 
  }
}
export default Experience;