import React from 'react'

class StateComp extends React.Component{
  //toda classe sempre usa render pois vai renderizar a interação do usuario~

    //state sempre é objeto, sem necessidade de constructor
  state = {
    count: 0
  }

  sub = () => {
    if (this.state.count > 0){
      this.setState({count: this.state.count - 1})
    }

  }
  add = () =>{
    this.setState({ count: this.state.count + 1 })
  }

  render(){
    return <div>
      aqui um render com classe
      
      <button onClick={this.sub}>-</button>
      <span> {this.state.count} </span>
       <button onClick={this.add}>+</button>
    </div>
  }

}
export default StateComp