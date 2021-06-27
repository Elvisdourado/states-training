import react from 'react'

function SelectInput(props) {
  return <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <select
      className="form-control"
      id={props.id}
      name={props.name}      
      onChange={props.onChange} //state normal como os outros
      value={props.value} //state normal como os outros
      defaultValue="default" //para ficar a opção não clickavel
      //e não precisar fazer o map num item em branco
    >
      {/* adicionamos mais uma option para ficar selecionada */}
      <option value={"default"} disabled selected> 
        Selecione uma opção 
      </option>      
      {props.items.map((item) => { //um map dos itens 
      return <option>{item}</option>})} 
    </select>
  </div>

}

export default SelectInput