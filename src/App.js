import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
/*import Contact from './Components/Contact';*/

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Education data={this.state.resumeData.experience}/>
        <Experience data={this.state.resumeData.experience}/>
        <Projects data={this.state.resumeData.experience}/>
        <Skills data={this.state.resumeData.experience}/>
        {/*<Contact data={this.state.resumeData.main}/>*/}
      </div>
    );
  }
}

export default App;
