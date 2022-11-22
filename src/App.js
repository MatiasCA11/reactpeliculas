import './styles.css';
import Pelicula from './components/Pelicula';
import peliculas from './json/peliculas.json';

function App() {
  return (
    <div>
      <header>
        <h1 id="Titulo">CINE JUY</h1>
      </header>
      <hr />
      {peliculas.map(peli =>
        <Pelicula
          img={peli.img}
          titulo={peli.titulo}
          duracion={peli.duracion}
          descripcion={peli.descripcion}
          actores={peli.actores}
          opinion={peli.opinion}
        ></Pelicula>)}
    </div>
  );
}

export default App;