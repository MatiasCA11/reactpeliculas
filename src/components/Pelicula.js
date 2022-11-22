import React from 'react';

class Pelicula extends React.Component{
    render(){
        return(
            <section class="contenido">
                <article class="pelicula">
                    <img src={this.props.img} alt=""/>
                </article>
                <article class="Descripcion">
                    <h1>{this.props.titulo}</h1>
                    <h4>{this.props.duracion}</h4>
                    <p>{this.props.descripcion}</p>
                    <h4>{this.props.actores}</h4>
                    <h5>{this.props.opinion}</h5>
                </article>
            </section>
        );
    }
}
export default Pelicula;