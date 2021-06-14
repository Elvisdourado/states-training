import React from 'react'
import TextInput from '../TextInput'
import Checkbox from '../Checkbox'


class AddMovie extends React.Component {
  //toda classe sempre usa render pois vai renderizar a interação do usuário

  //state sempre é objeto, sem necessidade de constructor
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: 0,
    genre: "",
    pgRating: ""
  }

  handleChange = (event) => {
    console.log("mudou!")
    this.setState({ [event.target.name]: event.target.value }) // usa [event.target.name] para direcionar pelo "name" o state correto
  }

  render() {
    console.log(this.state) //para mostrar as edições no state, boa pratica
    return <form>
      {/* movie title */}
      <TextInput
        label="Movie Title"
        type="text"
        id="TitleField"
        name="title"
        onChange={this.handleChange}
        value={this.state.title}
      />

      {/* movie Director */}
      <TextInput
      //quaisquer formulários utilizarão a mesma lógica
        label="Director" //modifica o label
        type="text"
        id="DirectorField" //modifica o id
        name="director" //modifica o name
        onChange={this.handleChange}
        value={this.state.director} //modifica o value
      />


      {/* Oscars */}
      <Checkbox
        label="Possui oscars?"
        id="CheckboxField"
        name="hasOscars"
        onChange={(event) => {
          this.setState({ [event.target.name]: event.target.checked })
        }}
        checked={this.state.hasOscars}
      />


      {/* Movie Rating */}
      <TextInput

      />
      <div className="form-group">
        <label htmlFor="imdb">Imdb Rating</label>
        <input
          type="range"
          className="form-control custom-range"
          id="imdbField"
          name="IMDbRating"
          min={0} //com min max e step limito o valor do slider
          max={10}
          step={0.1}
          onChange={this.handleChange}
          value={this.state.IMDbRating}
        />
        <label>{this.state.IMDbRating}</label>
      </div>




      {/* aqui usando o seletor com opções para escolher */}
      <div className="form-group">
        <label htmlFor="MovieGenre">Gêneros</label>
        <select
          id="genreField"
          name="genre"
          className="form-control"
          onChange={this.handleChange} //state normal como os outros
          value={this.state.genre} //state normal como os outros
        >
          <option></option>
          <option>Drama</option>
          <option>Comedia</option>
          <option>Ação</option>
        </select>
      </div>
      <div className="form-group"> {/*precisamos de duas divs quanto temos radio */}
        <h5>Classificações indicativas</h5>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input" //para deixar todos na mesma linha
            id="pgRatingFieldCriança" //o id deve ser igual ao htmlFor
            name="pgRating" //é o name igual em todas opções que faz so ter uma opção p/ escolher
            onChange={this.handleChange}
            checked={this.state.pgRating === "Criança"} // precisa retornar true ou false para o uso no backend
            // pedro falou que precisa do checked pra mostrar pintado, porem pinta sem esse parametro
            value="Criança" //precisa ser o valor diretamente 
          />
          <label
            className="custom-control-label"
            htmlFor="pgRatingFieldCriança"
          >
            Criança
            </label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input"
            id="pgRatingFieldLivre"
            name="pgRating"
            onChange={this.handleChange}
            checked={this.state.pgRating === "Livre"}
            value="Livre"
          />
          <label className="custom-control-label" htmlFor="pgRatingFieldLivre">Livre</label>
        </div>

        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input"
            id="pgRatingFieldAdultos"
            name="pgRating"
            onChange={this.handleChange}
            checked={this.state.pgRating === "Adultos"}
            value="Adultos"
          />
          <label className="custom-control-label" htmlFor="pgRatingFieldAdultos">Adultos</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  }


}
export default AddMovie