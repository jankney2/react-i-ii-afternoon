import React, { Component } from 'react';

import './App.css';
import Header from './components/Header'
import Card from './components/Card'

//cards switch on buttons 
//functionality first, design second! 
//people is an array of objects that contain people's info 

//auto create elements based off number of items in people array


class App extends Component {
  constructor() {
    super()
    this.state= {

      people: [
        {
          name: "Jacob",
          from: "VA Beach",
          jobTitle: "Programmer",
          employer: "DevMtn Dew",
          favMovies: ["Fantastic Mr Fox", "Inception", "Captain Fantastic"]
        },
        {
          name: "doss",
          from: "portland",
          jobTitle: "Programmer",
          employer: "Rentie",
          favMovies: ["The notebook", "tropic thunder", "The last Jedi"]
        },
        {
          name: "tyler",
          from: "utah",
          jobTitle: "Programmer",
          employer: "R",
          favMovies: ["The notebook", "tropic thunder", "The last Jedi", "the big lebowski"]
        },
        {
          name: "bob",
          from: "utah",
          jobTitle: "Programmer",
          employer: "R",
          favMovies: ["The notebook", "tropic thunder", "The last Jedi", "the big lebowski"]
        },
      ],
      displayNo: 0,
      


    }
  }


//map over array and create components for all elements





changeNo= ()=> {
  
  if(this.state.displayNo<this.state.people.length-1){
  this.setState({
    displayNo: ++this.state.displayNo
  })
}
}

loseNo= () => {
  
  if(this.state.displayNo>0){
  this.setState({
    displayNo: --this.state.displayNo
  })
}
}

  render() {

    return (
      <div className="App">
      

      <Header />
      <Card 
      people={this.state.people}
      loseNo={this.loseNo}
      changeNo={this.changeNo}
      name={this.state.people[this.state.displayNo].name}
      from={this.state.people[this.state.displayNo].from}
      jobTitle={this.state.people[this.state.displayNo].jobTitle}
      employer={this.state.people[this.state.displayNo].employer}
      favMovies={this.state.people[this.state.displayNo].favMovies}
      displayNo={this.state.displayNo}
      movies={this.movies}
      />

      </div>
    );
  }
}

export default App;
