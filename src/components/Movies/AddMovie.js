import React from 'react'


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
      <div className="form-group">
        <label htmlFor="Title">Título</label>
        <input
          type="text"
          className="form-control"
          id="TitleField"
          //esses 3 parâmetros fazem o input ser controlado
          name="title" // para o event atualizar o state correto, precisa ser igual ao que foi definido nos states
          onChange={this.handleChange} //faz o state atualizar apos evento change       
          value={this.state.title} //faz o valor entrar entrar no value state
        />
      </div>
      {/* movie Director */}
      <div className="form-group">
        <label htmlFor="Director">Diretor</label>
        <input
          type="text"
          className="form-control"
          id="DirectorField"
          name="director"
          onChange={this.handleChange}
          value={this.state.director}
        />
      </div>
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
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="CheckboxField"
          name="hasOscars"
          //checkbox precisa fazer uma callback direcionando para "checked" ao invés de "value" 
          //como nos inputs de escrever
          onChange={(event) => {
            this.setState({ [event.target.name]: event.target.checked })
          }}
          checked={this.state.hasOscars} // também é necessário mudar de "value" para "checked"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">Possui Oscars?</label>
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