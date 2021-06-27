import React from 'react'

function Range(props) {
  return <div className="form-group">
    <label htmlFor="imdb">{props.label}</label> {/*muda o label */}
    <input
      type="range"
      className="form-control custom-range"
      id={props.id} //muda de "imdbField" p {props.id} 
      name={props.name} // muda o name de "IMDbRating" p {props.name}
      min={props.min} //muda o min de {0} para {props.min}
      max={props.max} // muda o max de {10} para {props.max}
      step={props.step} //muda o step de {0.0} para {props.step} 
      onChange={props.onChange} //muda de {this.handleChange} p/ {props.onChange}
      value={props.value} //muda de value={this.state.IMDbRating} p/
    />
    <label>{props.value}</label> {/* muda de {this.state.IMDbRating} p/ */}
  </div>
  
}

export default Range