import react from "react"

function RadioInputs(props) {
  return <div className="custom-control custom-radio custom-control-inline">
    <input
      type="radio"
      className="custom-control-input"
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      checked={props.checked}
      value={props.value}
    />
    <label className="custom-control-label" htmlFor={props.id}>{props.label}</label>
  </div>
  
}

export default RadioInputs