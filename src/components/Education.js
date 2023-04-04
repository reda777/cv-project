import React, {Component} from 'react';
class Education extends Component{
  constructor(props){
    super(props);
    this.state={
      rows: [{
        id: 0,
        degreeName: 'Degree Name',
        degreeYear: 'start-end',
        degreeSchool: 'School Name',
        degreeDesc: 'Degree description Degree description Degree description Degree description Degree description Degree description Degree description Degree description Degree description.',
      }],
    }
    this.handleAdd=this.handleAdd.bind(this);
    this.handleClick=this.props.handleClick;
    this.handleChange=this.handleChange.bind(this);
    this.handleEnter=this.props.handleEnter;
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
  handleAdd(){
    if(this.state.rows.length<3){
      this.setState((state) => ({
        rows: state.rows.concat({
          id: state.rows.length,
          degreeName: 'Degree Name',
          degreeYear: 'start-end',
          degreeSchool: 'School Name',
          degreeDesc: 'Degree description Degree description Degree description Degree description Degree description Degree description Degree description Degree description Degree description.',
        })
      }));
    }
  }
  renderDegreeName(id){
    const renderPart=this.props.renderPart;
    const renderId=this.props.renderId;
    let degreeNameDiv=(renderPart==='degreeName' && renderId===id)?
                  (<input type='text' id='degreeName' value={this.state.rows[id].degreeName} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='degreeName' onClick={this.handleClick}>{this.state.rows[id].degreeName}</div>);
    return degreeNameDiv;
  }
  renderDegreeYear(id){
    const renderPart=this.props.renderPart;
    const renderId=this.props.renderId;
    let degreeYearDiv=(renderPart==='degreeYear' && renderId===id)?
                  (<input type='text' id='degreeYear' value={this.state.rows[id].degreeYear} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='degreeYear' onClick={this.handleClick}>{this.state.rows[id].degreeYear}</div>);
    return degreeYearDiv;
  } 
  renderDegreeSchool(id){
    const renderPart=this.props.renderPart;
    const renderId=this.props.renderId;
    let degreeSchoolDiv=(renderPart==='degreeSchool' && renderId===id)?
                  (<input type='text' id='degreeSchool' value={this.state.rows[id].degreeSchool} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='degreeSchool' onClick={this.handleClick}>{this.state.rows[id].degreeSchool}</div>);
    return degreeSchoolDiv;
  }
  renderDegreeDesc(id){
    const renderPart=this.props.renderPart;
    const renderId=this.props.renderId;
    let degreeDescDiv=(renderPart==='degreeDesc' && renderId===id)?
                  (<textarea type='text' id='degreeDesc' value={this.state.rows[id].degreeDesc} onChange={this.handleChange} onKeyDown={this.handleEnter}/>):
                  (<div className='degreeDesc' onClick={this.handleClick}>{this.state.rows[id].degreeDesc}</div>);
    return degreeDescDiv;
  }
  renderRows(){
    return this.state.rows.map((row,index)=>{
      return (
        <div className='educationRow' data-id={index} key={index}>
          <div className='square'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M7.25 2.388C8.55 2.099 10.124 2 12 2s3.451.1 4.75.388c1.31.291 2.399.788 3.236 1.626.838.837 1.335 1.926 1.626 3.236C21.901 8.55 22 10.124 22 12s-.1 3.451-.388 4.75c-.291 1.31-.788 2.399-1.626 3.236-.837.838-1.926 1.335-3.236 1.626-1.299.289-2.874.388-4.75.388s-3.451-.1-4.75-.388c-1.31-.291-2.399-.788-3.236-1.626-.838-.837-1.335-1.926-1.626-3.236C2.099 15.45 2 13.876 2 12s.1-3.451.388-4.75c.291-1.31.788-2.399 1.626-3.236.837-.838 1.926-1.335 3.236-1.626Z" clipRule="evenodd"/>
            </svg>
          </div>
          {this.renderDegreeName(index)}
          {this.renderDegreeSchool(index)}
          {this.renderDegreeYear(index)}
          {this.renderDegreeDesc(index)}
        </div>
      );
    })
  }
  render(){
    let rows=this.renderRows();
    return (
      <div className='education'>
        <div className='title'>
          <div className='titleText'>EDUCATION</div>
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
export default Education;