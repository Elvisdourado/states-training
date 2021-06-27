import react from "react"

function Checkbox(props) {
  return <div className="form-group form-check">
    {/* htmlFor e o conteúdo de dentro da label mudam */}
    <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
    <input
      type="checkbox" //permanece
      className="form-check-input"  //permanece
      id={props.id} //muda  de "CheckboxField" p/
      name={props.name} //muda de "hasOscars" p/
      onChange={props.onChange} //muda de {(event) => {
      //this.{[event.target.name]: event.target.checked })
         // }}
      checked={props.checked} //muda de {this.state.hasOscars} p/
    />

  </div>
  
}

export default Checkbox