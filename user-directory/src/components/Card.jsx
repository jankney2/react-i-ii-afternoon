


//card takes props from parent object- 


import React, {Component} from 'react'

class Card extends Component {
  constructor(props){
    super(props)
   
  }

  
  render() {

    
    let people= this.props.people
    
    return(
      <div className="parent">

      <div className="container">
      
      <h1 className="counter">{this.props.displayNo+1}/{people.length} </h1>
      <h1 className="name"> {this.props.name}</h1>
      
      <h2><span className="bold">From:</span>{this.props.from}</h2>
      <h2><span className="bold">Job Title:</span> {this.props.jobTitle}</h2>
      <h2><span className="bold">Employer:</span>{this.props.employer}</h2>


      <ol>
        <p>Favorite Movies</p>
      {this.props.favMovies.map((element)=>{
        return <li>{element}</li>
      })}


      {/* fix these to auto update depending on items in fav movies array  */}
      

      </ol>
      
      </div>

      <div className="buttonHolder">
      <button onClick={()=> {
        this.props.loseNo()
      }}>{"<"}Previous</button>
      <button onClick={()=> {
        // console.log(this.props.displayNo)
      this.props.changeNo()
      }
}>Next{">"}</button>
      </div>


      </div>




    )
  }
}


export default Card
