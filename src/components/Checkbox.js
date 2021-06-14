import react from "react"

function Checkbox(props) {
  return <div className="form-group form-check">
    {/* htmlFor e o conteúdo de dentro da label mudam */}
    <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
    <input
      type="checkbox" //permanece
      className="form-check-input"  //permanece
      id={props.id} //muda
      name={props.name} //muda
      onChange={props.onChange} //muda
      checked={props.checked} //muda
    />

  </div>
  
}

export default Checkbox