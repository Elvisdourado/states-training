import React from 'react'
import TextInput from '../TextInput'
import Checkbox from '../Checkbox'
import Range from '../Range'
import SelectInput from '../SelectInput'
import RadioInputs from "../RadioInputs"


class AddMovie extends React.Component {
  //toda classe sempre usa render pois vai renderizar a interação do usuário

  //state sempre é objeto, sem necessidade de constructor
  state = {
    title: "",
    director: "",
    hasOscars: false,
    IMDbRating: 0,
    genre: "default", //aqui é para mostrar um valor de escolha
    pgRating: "",
    movies: [],

  }

  handleChange = (event) => {
    console.log("mudou!")
    this.setState({ [event.target.name]: event.target.value }) // usa [event.target.name] para direcionar pelo "name" o state correto
  }

  handleSubmit = (event) => {
    //precisa fazer um update manual para renderizar dados adicionados
    //precisa fazer um spread do state
    const newMovie = { ...this.state }

    //aqui precisamos dar um map no movie toda vez pois atualiza as entradas
    //após a virgula do spread, o que vem em seguida é adicionado na array
    const updatedArray = [...this.state.movies, newMovie]

    //desestruturação para verificar se todos os campos estão preenchidos, no caso de
    //"hasOscars" que é um booleano, se o filme não tiver oscar, ele fica como false
    //logo não vai passar na verificação, então todo booleano, fica de fora da verificação
    const {title, director, hasOscars, IMDbRating, genre, pgRating} = this.state
    if (title && director  && IMDbRating &&  genre && pgRating){
      this.setState({
        //aqui em especifico, adicina todo o state zerado, isso faz com
        //que após adicionar um item na lista, ele zere a lista
        //sem o ultimo state, o movies
        movies: [...updatedArray],
        title: "",
        director: "",
        hasOscars: false,
        IMDbRating: 0,
        genre: "default",
        pgRating: "",
      })
    }else {
      window.alert("preencha todos os campos!")
    } 
    //isso previne que o submit recarregue a pagina e perca tudo
    //precisa passar como parametro na função
    event.preventDefault()
  }


  render() {
    console.log(this.state) //para mostrar as edições no state, boa pratica
    return (
      <div className="row">
        <div className="col-md-8">
          <table class="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Filme</th>
                <th scope="col">Diretor</th>
                <th scope="col">Possui Oscar?</th>
                <th scope="col">IMDB</th>
                <th scope="col">Gênero</th>
                <th scope="col">Classificação</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie) => {
                return <tr>
                  <td>{movie.title}</td>
                  <td>{movie.director}</td>
                  {/* para booleanos, precisamos fazer aparecer
                  algo como string, ternário resolve */}
                  <td>{movie.hasOscars === true ? "Sim" : "Não"}</td>
                  <td>{movie.IMDbRating}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.pgRating}</td>
                </tr>
              })}

            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <form>
            {/* movie title */}
            <TextInput
              label="Movie Title"
              type="text"
              id="TitleField"
              name="title" //dados digitados pelo usuário são sempre direcionados pelo campo "name="algo"" para guardar
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
            <Range
              label="Imdb Rating"
              name="IMDbRating"
              min={0}
              max={10}
              step={0.1}
              onChange={this.handleChange}
              value={this.state.IMDbRating}

            />

            {/* aqui usando o seletor com opções para escolher */}
            <SelectInput
              label="genre"
              id="genreField"
              name="genre"
              onChange={this.handleChange}
              value={this.state.genre}
              items={["drama", "comedia", "ação"]}
            />

            <div className="form-group"> {/*precisamos de duas divs quanto temos radio */}
              <h5>Classificações indicativas</h5>
              <RadioInputs
                label="Infantil"
                id="pgRatingFieldInfantil"
                name="pgRating"
                checked={this.state.pgRating === "Infantil"}
                onChange={this.handleChange}
                value="Infantil"
              />
              <RadioInputs
                label="Adultos"
                id="pgRatingFieldAdultos"
                name="pgRating"
                checked={this.state.pgRating === "Adultos"}
                onChange={this.handleChange}
                value="Adultos"
              />
              <RadioInputs
                label="Livre"
                id="pgRatingFieldLivre"
                name="pgRating"
                checked={this.state.pgRating === "Livre"}
                onChange={this.handleChange}
                value="Livre"
              />

            </div>
            <button
              //botões do tipo submit sempre recarregam as paginas
              //precisa impedir esse comportamento
              //é adicionado um "event" a função handleSubmit
              // e o prevent default
              onClick={this.handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
              </button>
          </form>

        </div>


      </div>

    )
  }


}
export default AddMovie