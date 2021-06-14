// caso queiramos deixar em arquivos separados para deixar um código mais enxuto

import react from 'react'

function TextInput(props) {
  return <div className="form-group">
    <label htmlFor="TitleField">{props.label}</label> {/*trocamos o valor de dentro das tags por props */}
    <input
      type={props.type} // muda
      className="form-control"
      id={props.id} //muda      
      name={props.name} // muda
      onChange={props.onChange} // muda
      value={props.value} // muda
      min={props.min} 
      max={props.max}
      step={props.step}
    />
  </div>  
}
export default TextInput